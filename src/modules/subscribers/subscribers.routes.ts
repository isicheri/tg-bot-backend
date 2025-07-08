import { Router } from 'express';
import { responseHandler } from '../../libs/handlers/response.handler';
import {
  getSubscriberGrowthRate,
  subscriberGrowthChartController,
  totalBotSubsciberCountController,
} from './subscribers.controller';
import { authenticatedMiddleware } from '../../middleware/auth.middleware';
const subscriberRouter = Router();

subscriberRouter.use(authenticatedMiddleware);
subscriberRouter.get('/sub-count/:botId', responseHandler(totalBotSubsciberCountController));
subscriberRouter.get('/growth-rate/:botId', responseHandler(getSubscriberGrowthRate));
subscriberRouter.get('/chart-growth-rate/:botId', responseHandler(subscriberGrowthChartController));

export default subscriberRouter;
