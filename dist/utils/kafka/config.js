"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafkaConfig = void 0;
var kafkaConfig;
(function (kafkaConfig) {
    const brokers = ['localhost:9092'];
    const clientId = 'test';
    kafkaConfig.config = {
        brokers,
        clientId
    };
})(kafkaConfig = exports.kafkaConfig || (exports.kafkaConfig = {}));
//# sourceMappingURL=config.js.map