import '../../lib/dynamic_import';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { can } from '../roles/roles';
// import { GlobalSettingsSchema } from './globalSettings.schema';

export const GlobalSettings = new Mongo.Collection('admin_settings');
// Deny all client-side updates on the Credentials collection
GlobalSettings.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
});

const orchestration = process.env.ORCHESTRATOR ? process.env.ORCHESTRATOR : 'docker-compose';
import(`./globalSettings.schema.${orchestration}`)
    .then(({ GlobalSettingsSchema }) => {
        GlobalSettings.attachSchema(GlobalSettingsSchema);
        if (Meteor.isServer) {
            Meteor.publish('settings', function() {
                if (can('global-settings:r', this.userId)) return GlobalSettings.find({ _id: 'SETTINGS' });
                return GlobalSettings.find({ _id: 'SETTINGS' }, { fields: { 'settings.public': 1 } });
            });
        }
    });
