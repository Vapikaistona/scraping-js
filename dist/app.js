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
const PagesInfo_1 = require("./utils/PagesInfo");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // await mongo.init();
    // const pageCollection: Collection = await mongo.getCollection('pages');
    PagesInfo_1.pages.write();
    function handle(signal) {
        console.log(`Received ${signal}`);
    }
    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
}))();
//# sourceMappingURL=app.js.map