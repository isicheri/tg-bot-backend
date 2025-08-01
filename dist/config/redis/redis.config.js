"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redisClient = new ioredis_1.default({
    username: "default",
    host: process.env.REDIS_HOST ?? "localhost",
    port: Number(process.env.REDIS_PORT) ?? 15649,
    password: process.env.REDIS_PASSWORD,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
});
redisClient.on('connecting', () => {
    console.info('connecting to redis.....');
});
redisClient.on('connect', () => {
    console.log('redis connected');
});
redisClient.on('error', (err) => {
    console.error('redis error:', err);
});
redisClient.on('end', () => {
    console.log('connection closed....');
});
exports.default = redisClient;
