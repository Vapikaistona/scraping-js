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
exports.kafkaModule = void 0;
const kafkajs_1 = require("kafkajs");
const config_1 = require("./config");
var kafkaModule;
(function (kafkaModule) {
    class KafkaClass {
        constructor() {
            this.producer = null;
            this.consumer = null;
            this.kafka = null;
        }
        init() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.kafka) {
                    this.kafka = new kafkajs_1.Kafka(Object.assign({}, config_1.kafkaConfig.config));
                }
                return this.kafka;
            });
        }
        getProducer() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.producer) {
                    this.producer = this.kafka.producer();
                    yield this.producer.connect();
                }
                return this.producer;
            });
        }
        getConsumer(groupId = 'test-group') {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.consumer) {
                    this.consumer = this.kafka.consumer({ groupId });
                    yield this.consumer.connect();
                }
                return this.consumer;
            });
        }
        producerSend({ producer, topic = 'test-topic', messages }) {
            return __awaiter(this, void 0, void 0, function* () {
                yield producer.send({
                    topic,
                    messages
                });
                yield producer.disconnect();
            });
        }
        consumerSubscribe({ consumer, topic = 'test-topic', options = { fromBeginning: true }, callback }) {
            return __awaiter(this, void 0, void 0, function* () {
                yield consumer.subscribe(Object.assign({ topic }, options));
                yield consumer.run({ eachMessage: callback });
            });
        }
        disconnect() {
            this.producer.disconnect();
            this.consumer.disconnect();
        }
    }
    kafkaModule.KafkaClass = KafkaClass;
})(kafkaModule = exports.kafkaModule || (exports.kafkaModule = {}));
;
//# sourceMappingURL=kafka.js.map