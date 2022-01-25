const keyboards = require('./products/keyboards');
const pages = require('./pages');
const utils = require('./utils');
const mongodb = require('./database/mongodb');
(async () => {
    mongodb.innit();
    const mechanicalkeyboards_keyboards = await keyboards.mechanicalkeyboardsKeyboards(3);
    mongodb.keyboards.insertMany([...mechanicalkeyboards_keyboards]);
    // console.log(JSON.stringify(mechanicalkeyboards_keyboards));
    // utils.setPages();
})();