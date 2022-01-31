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
exports.mongo = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
var mongo;
(function (mongo) {
    let client;
    let db = null;
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = new mongodb_1.MongoClient(config_1.mongoConfig.url);
            yield this.client.connect();
            this.db = this.client.db(config_1.mongoConfig.dbName);
        });
    }
    mongo.init = init;
    function getCollection(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.collection(collection);
        });
    }
    mongo.getCollection = getCollection;
    function close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
        });
    }
    mongo.close = close;
})(mongo = exports.mongo || (exports.mongo = {}));
;
//# sourceMappingURL=mongodb.js.map