import { Collection, Db, MongoClient } from 'mongodb';
import { mongoConfig } from './config';

export module mongo {
  let client: MongoClient;
  let db: Db = null;

  export async function init() {
    this.client = new MongoClient(mongoConfig.url)
    await this.client.connect();
    this.db = this.client.db(mongoConfig.dbName);
  }
  export async function getCollection(collection: string){
    return this.db.collection(collection);
  }
  export async function close(){
    await this.client.close();
  }
};