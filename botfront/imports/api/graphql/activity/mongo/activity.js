import shortid from 'shortid';
import Activity from '../activity.model.js';

export const getActivity = async ({
    modelId,
    env,
    validated = false,
    ooS = false,
    sortKey = 'createdAt',
    sortDesc = true,
    filter = {},
}) => {
    const onlyValidated = validated ? { validated: true } : {};
    const ooSOption = ooS ? { ooS } : { $or: [{ ooS: { $exists: false } }, { ooS: { $eq: false } }] };
    const envOption = env
        ? env === 'development'
            ? { env: { $in: ['development', null] } }
            : { env }
        : {};
    const { query: textSearch, intents, entities } = filter;
    const intentsOption = intents && intents.length ? { intent: { $in: intents } } : {};
    const entitiesOption = entities && entities.length ? { entities: { $all: entities.map(e => ({ $elemMatch: { entity: e } })) } } : {};
    const textSearchOption = textSearch ? { text: { $regex: textSearch } } : {};
    const sort = `${sortDesc ? '-' : ''}${sortKey || ''}`;
    const query = Activity.find({
        modelId,
        ...onlyValidated,
        ...ooSOption,
        ...envOption,
        ...intentsOption,
        ...entitiesOption,
        ...textSearchOption,
    });
    if (!sort) return query.lean();
    return query.sort(sort).lean();
};

export const upsertActivity = async ({ modelId, data }) => {
    const updates = data.map((datum) => { // no better way to do this than multiple queries
        const {
            _id, text, createdAt, ...utterance
        } = datum;
        const ID = _id ? { _id } : {}; // is id provided?
        const TEXT = text ? { text } : {}; // is text provided?
        return Activity.findOneAndUpdate(
            { modelId, ...TEXT, ...ID },
            { $set: { ...utterance, ...TEXT, updatedAt: new Date() }, $setOnInsert: { _id: shortid.generate(), createdAt: new Date() } },
            { upsert: true, new: true },
        ).exec();
    });
    return Promise.all(updates);
};

export const deleteActivity = async ({ modelId, ids }) => {
    const response = await Activity.remove({ modelId, _id: { $in: ids } }).exec();
    if (response.ok) return ids.map(_id => ({ _id }));
    return [];
};
