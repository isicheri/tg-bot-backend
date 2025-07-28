import { Router } from 'express';
import { responseHandler } from '../../libs/handlers/response.handler';
import {
  forgotPasswordController,
  getUserbotsPersonalandTeamController,
  getUserOwnedTeamCountController,
  resetUserPasswordController,
} from './user.controller';
import { authenticatedMiddleware } from '../../middleware/auth.middleware';

const userRouter = Router();

userRouter.post('/forgot-password', responseHandler(forgotPasswordController));
userRouter.put('/reset-password', responseHandler(resetUserPasswordController));

userRouter.use(authenticatedMiddleware);
userRouter.get('/bots', responseHandler(getUserbotsPersonalandTeamController));
userRouter.get('/count-team', responseHandler(getUserOwnedTeamCountController));

export default userRouter;
