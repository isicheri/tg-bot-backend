"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, _next) => {
    res.status(err.statusCode ?? 500).json({
        name: err.errname,
        message: err.message,
        status: false,
    });
};
exports.default = errorMiddleware;
