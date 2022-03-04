import { Collection, Db } from "mongodb";
import { PagesSchema } from "./schemas/pages";
export class Pages {
    collection: Collection;
    constructor(database: Db){
        this.collection = database.collection('pages');
    }

    async fullUpdate(sku: string, item: PagesSchema){
        return this.collection.updateOne({ sku }, item);
    };
    async partialUpdate(sku: string, properties: any){
        return this.collection.updateOne({ sku }, { $set: { ...properties }});
    };
    async insert(item: PagesSchema){
        return this.collection.insertOne({ item });
    };
    async get(query: any){
        return this.collection.find(query);
    };
}