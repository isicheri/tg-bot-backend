import { Router } from 'express';
import { responseHandler } from '../../libs/handlers/response.handler';
import { createFeedback } from './feedback.controller';
const feedBackRouter = Router();

feedBackRouter.post('/', responseHandler(createFeedback));

export default feedBackRouter;
