import { pages } from './utils/PagesInfo';
import { mongo } from './utils/database/mongodb';
import { Collection } from 'mongodb';
(async () => {
    // await mongo.init();
    // const pageCollection: Collection = await mongo.getCollection('pages');
    pages.write();
    function handle(signal) {
        console.log(`Received ${signal}`);
    }

    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
})();