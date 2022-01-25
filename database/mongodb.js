const { MongoClient } = require('mongodb');
const config = require('./config');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(config.url);
let keyboards;

async function innit() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(config.dbName);
  keyboards = db.collection('keyboards');

  // the following code examples can be pasted here...

  return 'done.';
}

module.exports = {
    innit,
    keyboards
}