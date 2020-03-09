import yaml from 'js-yaml';
import mongoose from 'mongoose';
import { Credentials, Endpoints } from './config.models.js';
import { getWebchatProps } from './webchatProps';

export default {
    Query: {
        getConfig: async (_root, args) => {
            const { projectId, environment, output } = args;
            const query = !environment || environment === 'development'
                ? {
                    $or: [
                        { projectId, environment: { $exists: false } },
                        { projectId, environment: 'development' },
                    ],
                }
                : { projectId, environment };
            const endpointsFetched = await Endpoints.findOne(query)
                .select({ endpoints: 1 }).lean().exec();
            const credentialsFetched = await Credentials.findOne(query)
                .select({ credentials: 1 }).lean().exec();
            const rules = await getWebchatProps(projectId);
            let { endpoints } = endpointsFetched;
            let { credentials } = credentialsFetched;

            credentials = yaml.safeLoad(credentials);
            if (credentials['rasa_addons.core.channels.webchat_plus.WebchatPlusInput']) {
                credentials['rasa_addons.core.channels.webchat_plus.WebchatPlusInput'].props = { rules };
            }
            // parse yaml unless yaml query param was passed
            if (output !== 'yaml') {
                endpoints = yaml.safeLoad(endpoints);
                return { endpoints, credentials };
            }

            credentials = yaml.safeDump(credentials);

            return { endpoints, credentials };
        },
        healthCheck: async () => (mongoose.connection.readyState === 1),
    },
};
