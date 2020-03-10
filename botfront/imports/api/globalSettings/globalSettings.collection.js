import '../../lib/dynamic_import';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { checkIfCan } from '../roles/roles';
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
                try {
                    checkIfCan('global-settings:r');
                    return GlobalSettings.find({ _id: 'SETTINGS' });
                } catch (err) {
                    return GlobalSettings.find({ _id: 'SETTINGS' }, { fields: { 'settings.public': 1, 'settings.private.webhooks': 1 } });
                }
            });
        }
    });
