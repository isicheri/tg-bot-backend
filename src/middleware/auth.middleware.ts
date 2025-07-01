import { Request, Response, NextFunction } from 'express';
export const authenticatedMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/signin');
};

export const stopCache = (req: Request, res: Response, next: NextFunction) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
};
