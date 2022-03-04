import { Collection, Db } from "mongodb";
import { KeyboardSchema } from "./schemas/keyboard";
export class Keyboards {
    collection: Collection;
    constructor(database: Db){
        this.collection = database.collection('keyboards');
    }

    async fullUpdate(sku: string, item: KeyboardSchema){
        return this.collection.updateOne({ sku }, item);
    };
    async partialUpdate(sku: string, properties: any){
        return this.collection.updateOne({ sku }, { $set: { ...properties }});
    };
    async insert(item: KeyboardSchema){
        return this.collection.insertOne({ item });
    };
    async get(query: any){
        return this.collection.find(query);
    };
}