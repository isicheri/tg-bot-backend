import { NextFunction, Request, Response } from 'express';
import { UserService } from '../modules/user/user.service';
import HttpMainError from '../libs/error/httpMainError';
import { logger } from '../app';

export const attachUserToLocals = async (req: Request, res: Response, next: NextFunction) => {
  const userService = new UserService();
  try {
    if (!req.user?.id) {
      throw new HttpMainError('Not Authorized', 403, 'authorisation error', null);
    }
    const user = await userService.findUserById(req.user.id);
    logger.info('from here error');
    res.locals.username = user?.username;
    res.locals.profilePic = user?.profileImg;
    res.locals.id = user?.id;
    next();
  } catch (error) {
    return res.render('error', { message: (error as Error).message });
  }
};
