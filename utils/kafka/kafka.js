const { Kafka } = require('kafkajs');
const { brokers, clientId } = require('./config');

let producer = null;
let consumer = null;
let kafka = null;

async function init(){
    if(!kafka){
        kafka = new Kafka({
            clientId,
            brokers
        });
    } 
    return kafka;
}
async function getProducer(){
    if (!producer){
        producer = kafka.producer();
        await producer.connect();
    }
    return producer;
}
async function getConsumer(groupId = 'test-group'){
    if (!consumer){
        consumer = kafka.consumer({ groupId });
        await consumer.connect();
    }
    return consumer;
}
async function producerSend({ producer, topic = 'test-topic', messages }){
    await producer.send({
        topic,
        messages
    })
    await producer.disconnect()
}
async function consumerSubscribe({ consumer, topic = 'test-topic', options = { fromBeginning: true }, callback }){
    await consumer.subscribe({ topic, ...options });
    await consumer.run({ eachMessage: callback });
}
function disconnect(){
    producer.disconnect();
    consumer.disconnect();
}

 module.exports = {
    init,
    getProducer,
    getConsumer,
    producerSend,
    consumerSubscribe,
    disconnect
 }
