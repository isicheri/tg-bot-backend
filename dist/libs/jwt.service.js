"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonwebtokenService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JsonwebtokenService {
    signToken(payload) {
        return (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET, { expiresIn: '1hr' });
    }
    verifyToken(token) {
        return (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    }
}
exports.JsonwebtokenService = JsonwebtokenService;
