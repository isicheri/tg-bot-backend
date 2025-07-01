import { Router } from 'express';
import userRouter from './modules/user/user.routes';
import authRouter from './modules/auth/auth.routes';
import feedBackRouter from './modules/feedback/feedback.routes';
const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/user', userRouter);
indexRouter.use('/feedback', feedBackRouter);

export default indexRouter;
