import { KafkaConfig } from "kafkajs";

export module kafkaConfig{
    const brokers: [string] = ['localhost:9092'];
    const clientId: string = 'test';
    export const config: KafkaConfig = {
        brokers,
        clientId
    };
}