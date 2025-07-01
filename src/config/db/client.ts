import { PrismaClient } from '../../../src/config/db/client/client';
const prismaClient = new PrismaClient({ log: ['query', 'error', 'info', 'warn'] });
export default prismaClient;
