import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import HttpMainError from '../../libs/error/httpMainError';
import { AuthServices } from './auth.service';
import { registerUserSchema } from './auth.validation';
import { logger } from '../../app';

let authService: AuthServices;

export const register = async (req: Request, res: Response): Promise<void> => {
  const parsedBody = await registerUserSchema.safeParseAsync(req.body);
  if (!parsedBody.success) {
    const formattedErrors = parsedBody.error.errors.map((e) => ({
      field: e.path[0],
      message: e.message,
    }));
    throw new HttpMainError(
      formattedErrors[0].message || 'Validation failed',
      400,
      parsedBody.error.name || 'validation error',
      formattedErrors
    );
  }
  authService = new AuthServices();
  const username = parsedBody.data.username;
  const password = parsedBody.data.password;
  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required' });
    return;
  }
  try {
    const user = await authService.register(username, password);
    logger.success('User created successfully');
    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, username: user.username },
    });
    return;
  } catch (error) {
    if (error instanceof HttpMainError)
      throw new HttpMainError(error.message, 400, 'Registreation error', error);
    logger.error('Registration failed');
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  logger.info('user trying to login');
  passport.authenticate(
    'local',
    { session: false },
    (err: HttpMainError, user: { id: string; username: string }, info: { message: string }) => {
      if (err) return next(err);
      if (!user)
        throw new HttpMainError(
          info?.message || 'Authentication failed',
          400,
          'authentication error',
          null
        );

      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.json({ status: true, message: 'Login successful' });
      });
    }
  )(req, res, next);
};

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: 'Error logging out' });
    res.json({ message: 'Logged out successfully' });
  });
};
