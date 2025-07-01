"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpMainError extends Error {
    constructor(message, statusCode, errname, errorobj) {
        super(message);
        this.statusCode = statusCode;
        this.errname = errname;
        this.errorobj = errorobj;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = HttpMainError;
