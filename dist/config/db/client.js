"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../../src/config/db/client/client");
const prismaClient = new client_1.PrismaClient({ log: ['query', 'error', 'info', 'warn'] });
exports.default = prismaClient;
