import { Router } from 'express';
import { authenticatedMiddleware } from '../../middleware/auth.middleware';
import { responseHandler } from '../../libs/handlers/response.handler';
import {
  getBotBroadCastsCountController,
  getRecentBroadcasts,
  sendBroadcast,
} from './broadcast.controller';

const broadcastRouter = Router();
broadcastRouter.use(authenticatedMiddleware);
broadcastRouter.post('/:botId', responseHandler(sendBroadcast));
broadcastRouter.get('/recents/:botId', responseHandler(getRecentBroadcasts));
broadcastRouter.get('/count-message/:botId', responseHandler(getBotBroadCastsCountController));

export default broadcastRouter;
