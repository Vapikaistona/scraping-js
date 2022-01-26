const { MongoClient } = require('mongodb');
const config = require('./config');

const client = new MongoClient(config.url);

let db = null;
async function init() {
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(config.dbName);
}

async function getCollection(collection){
  return db.collection(collection);
}
async function close(){
  await db.close();
}
module.exports = {
    init,
    getCollection,
    close
}