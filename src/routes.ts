import { Router } from 'express';
import userRouter from './modules/user/user.routes';
import authRouter from './modules/auth/auth.routes';
import feedBackRouter from './modules/feedback/feedback.routes';
import botRouter from './modules/bots/bot.routes';
import broadcastRouter from './modules/broadcast/broadcast.routes';
import subscriberRouter from './modules/subscribers/subscribers.routes';
import teamRouter from './modules/teams/teams.routes';
const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/user', userRouter);
indexRouter.use('/feedback', feedBackRouter);
indexRouter.use('/bot', botRouter);
indexRouter.use('/broadcast', broadcastRouter);
indexRouter.use('/subscriber', subscriberRouter);
indexRouter.use('/teams', teamRouter);

export default indexRouter;
