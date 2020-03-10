import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { GlobalSettings } from '../globalSettings/globalSettings.collection';
import {
    can, getScopesForUser, checkIfCan, getUserScopes, checkIfScope,
} from '../../lib/scopes';


export const Projects = new Mongo.Collection('projects');

// Deny all client-side updates on the Projects collection
Projects.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

const getDefaultDefaultDomain = () => {
    const fields = {
        'settings.private.defaultDefaultDomain': 1,
    };
    const { settings: { private: { defaultDefaultDomain = {} } = {} } = {} } = GlobalSettings.findOne({}, { fields }) || {};
    return defaultDefaultDomain;
};

export const createProject = (item) => {
    checkIfCan('projects:w');
    return Projects.insert({ ...item, defaultDomain: { content: getDefaultDefaultDomain() } });
};


if (Meteor.isServer) {
    const orchestration = process.env.ORCHESTRATOR ? process.env.ORCHESTRATOR : 'docker-compose';
    import(`./project.schema.${orchestration}`)
        .then(({ ProjectsSchema }) => {
            Projects.attachSchema(ProjectsSchema);
        })
        .catch(() => {
            import('./project.schema.default')
                .then(({ ProjectsSchema }) => {
                    Projects.attachSchema(ProjectsSchema);
                });
        });
}

if (Meteor.isClient) {
    Meteor.call('orchestration.type', async (err, orchestration) => {
        try {
            const { ProjectsSchema } = await import(`./project.schema.${orchestration}`);
            Projects.attachSchema(ProjectsSchema);
        } catch (e) {
            const { ProjectsSchema } = await import('./project.schema.default');
            Projects.attachSchema(ProjectsSchema);
        }
    });
}


Meteor.startup(() => {
    if (Meteor.isServer) {
        Projects._ensureIndex({ 'templates.key': 1 });
        Projects._ensureIndex({ apiKey: 1, _id: 1 });
        Projects._ensureIndex({ 'templates.match.nlu.intent': 1, 'templates.match.nlu.entities.entity': 1, 'templates.match.nlu.entities.value': 1 });
    }
});

if (Meteor.isServer) {
    Meteor.publish('projects', function (projectId) {
        if (!getUserScopes(this.userId, ['nlu-data:r', 'responses:r', 'users:r', 'roles:r', 'nlu-data:x', 'global-settings:r']).includes(projectId)) {
            return this.ready();
        }
        check(projectId, Match.Optional(String));
        if (can('projects:r', projectId)) {
            return Projects.find({ _id: projectId });
        }
        return Projects.find({ _id: projectId }, {
            fields: {
                name: 1,
                defaultLanguage: 1,
                disabled: 1,
                nlu_models: 1,
                updatedAt: 1,
                instance: 1,
                training: 1,
                nluThreshold: 1,
            },
        });
    });

    Meteor.publish('projects.names', function () {
        if (can('projects:r', null, this.userId)
            || can('users:r', { anyScope: true }, this.userId)
        ) {
            return Projects.find({}, { fields: { name: 1 } });
        }
        const projects = getUserScopes(this.userId, ['responses:r', 'nlu-data:r', 'nlu-data:x']);
        return Projects.find({ _id: { $in: projects } }, { fields: { name: 1 } });
    });
}
