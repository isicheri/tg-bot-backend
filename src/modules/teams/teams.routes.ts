import { Router } from 'express';
import { responseHandler } from '../../libs/handlers/response.handler';
import { getUserTeamsPersonalAndNotPersonal } from './teams.controller';

const teamRouter = Router();

teamRouter.get('/user/teams', responseHandler(getUserTeamsPersonalAndNotPersonal));

export default teamRouter;
