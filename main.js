const keyboards = require('./products/keyboards');
const pages = require('./pages');
const utils = require('./utils');
const mongodb = require('./utils/database/mongodb');
const kafka = require('./utils/kafka/kafka');
const dbCollections = require('./utils/database/collections');
(async () => {
    await mongodb.init();
    const pagesInfo = pages.getAllPages();
    await dbCollections.insertPages(pagesInfo);
    // const mechanicalkeyboards_keyboards = await keyboards.mechanicalkeyboardsKeyboards(3);
    // const keyboardsCollection = await mongodb.getCollection('keyboards');
    // await keyboardsCollection.insertMany([...mechanicalkeyboards_keyboards]);
    // console.log(JSON.stringify(mechanicalkeyboards_keyboards));
    // utils.setPages();
    // const allPages = await pages.getAllPages()
    // const favicon = await pages.getFavicon(allPages[0].webs[10]);
    // console.log(favicon);
    // await kafka.init();
    // const testProducer = await kafka.getProducer();
    // await kafka.producerSend({ producer: testProducer, messages: [{ value: 'A a a a aanooother falls' },{ value: 'youuuu foool' }]})
    // const testConsumer = await kafka.getConsumer('something-2');
    // await kafka.consumerSubscribe({consumer: testConsumer, topic: 'test-topic', callback: async ({ topic, partition, message }) => {
    //     console.log({
    //       value: message.value.toString(),
    //     })
    //   }})


    // Using a single function to handle multiple signals
    function handle(signal) {
        console.log(`Received ${signal}`);
        kafka.disconnect();
        mongodb.close();
    }

    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
})();