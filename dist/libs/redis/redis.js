"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedOrDbData = void 0;
const redis_config_1 = __importDefault(require("../../config/redis/redis.config"));
const getCachedOrDbData = async (key, fallbackFn) => {
    const cached = await redis_config_1.default.get(key);
    if (cached) {
        return JSON.parse(cached);
    }
    const data = await fallbackFn();
    await redis_config_1.default.set(key, JSON.stringify(data), 'EX', 60); // Cache for 60 seconds
    return data;
};
exports.getCachedOrDbData = getCachedOrDbData;
