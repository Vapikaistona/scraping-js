import { Consumer, Kafka, Producer } from "kafkajs";
import { kafkaConfig } from './config';

export module kafkaModule {
    export class KafkaClass{
        producer: Producer = null;
        consumer: Consumer = null;
        kafka: Kafka = null;
        
        async init(){
            if(!this.kafka){
                this.kafka = new Kafka({
                    ...kafkaConfig.config
                });
            } 
            return this.kafka;
        }
        async getProducer(){
            if (!this.producer){
                this.producer = this.kafka.producer();
                await this.producer.connect();
            }
            return this.producer;
        }
        async getConsumer(groupId = 'test-group'){
            if (!this.consumer){
                this.consumer = this.kafka.consumer({ groupId });
                await this.consumer.connect();
            }
            return this.consumer;
        }
        async producerSend({ producer, topic = 'test-topic', messages }){
            await producer.send({
                topic,
                messages
            })
            await producer.disconnect()
        }
        async consumerSubscribe({ consumer, topic = 'test-topic', options = { fromBeginning: true }, callback }){
            await consumer.subscribe({ topic, ...options });
            await consumer.run({ eachMessage: callback });
        }
        disconnect(){
            this.producer.disconnect();
            this.consumer.disconnect();
        }
    }
};