"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { pages } from './utils/PagesInfo';
const mongodb_1 = require("./utils/database/mongodb");
const pages_1 = require("./utils/database/collections/pages");
const keyboards_1 = require("./utils/database/collections/keyboards");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // await mongo.init();
    // const pageCollection: Collection = await mongo.getCollection('pages');
    const database = yield mongodb_1.mongo.init();
    const pages = new pages_1.Pages(database);
    const keyboards = new keyboards_1.Keyboards(database);
    const cursor = yield keyboards.get({});
    if ((yield cursor.count()) === 0) {
        console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    yield cursor.forEach(item => console.log(item));
    // pages.write();
    function handle(signal) {
        console.log(`Received ${signal}`);
    }
    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
}))();
//# sourceMappingURL=app.js.map