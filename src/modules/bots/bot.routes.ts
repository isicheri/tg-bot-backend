import { Router } from 'express';
import { authenticatedMiddleware } from '../../middleware/auth.middleware';
import { responseHandler } from '../../libs/handlers/response.handler';
import { createBotController, getUserBotCount, webhookController } from './bots.controller';
import { getRecentBroadcasts } from '../broadcast/broadcast.controller';
const botRouter = Router();

botRouter.post('/webhook/:botId', webhookController);
botRouter.use(authenticatedMiddleware);
botRouter.post('/create', responseHandler(createBotController));
botRouter.get('/:botId/broadcasts', responseHandler(getRecentBroadcasts));
botRouter.get('/user-bot', responseHandler(getUserBotCount));

export default botRouter;
