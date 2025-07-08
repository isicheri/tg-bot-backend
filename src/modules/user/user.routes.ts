import { Router } from 'express';
import { responseHandler } from '../../libs/handlers/response.handler';
import {
  getUserbotsPersonalandTeamController,
  getUserOwnedTeamCountController,
} from './user.controller';
import { authenticatedMiddleware } from '../../middleware/auth.middleware';

const userRouter = Router();
userRouter.use(authenticatedMiddleware);

userRouter.get('/bots', responseHandler(getUserbotsPersonalandTeamController));
userRouter.get('/count-team', responseHandler(getUserOwnedTeamCountController));

export default userRouter;
