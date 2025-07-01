"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = require("express-rate-limit");
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // return rate limit info in `RateLimit-*` headers
    legacyHeaders: false, // disable the deprecated `X-RateLimit-*` headers
    message: 'Too many requests from this IP, please try again later.',
});
exports.default = limiter;
