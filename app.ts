// import { pages } from './utils/PagesInfo';
import { mongo } from './utils/database/mongodb';
import { Pages } from './utils/database/collections/pages';
import { Keyboards } from './utils/database/collections/keyboards';
(async () => {
    // await mongo.init();
    // const pageCollection: Collection = await mongo.getCollection('pages');
    const database = await mongo.init();
    const pages = new Pages(database);
    const keyboards = new Keyboards(database);

    const cursor = await keyboards.get({});
    if ((await cursor.count()) === 0) {
        console.log("No documents found!");
      }
      // replace console.dir with your callback to access individual elements
      await cursor.forEach(item => console.log(item));
    // pages.write();
    function handle(signal) {
        console.log(`Received ${signal}`);
    }

    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
})();