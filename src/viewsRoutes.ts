import { Router, Request, Response } from 'express';
import { authenticatedMiddleware } from './middleware/auth.middleware';
import { attachUserToLocals } from './middleware/user.local.middleware';

const viewRouter = Router();

viewRouter.get('/', (req: Request, res: Response) => {
  res.render('home');
});

viewRouter.get('/pricing', (req: Request, res: Response) => {
  res.render('pricing');
});

viewRouter.get('/signin', (req, res) => {
  res.render('signin');
});

viewRouter.get('/user/forgot-password', (req, res) => {
  res.render('forgotpassword');
});

viewRouter.get('/user/reset-password', async (_, res) => {
  res.render('resetpassword');
});

viewRouter.get('/user/dashboard', authenticatedMiddleware, attachUserToLocals, async (req, res) => {
  res.render('dashboard', {
    currentPage: 'dashboard',
  });
});

viewRouter.get('/user/bots', authenticatedMiddleware, attachUserToLocals, async (req, res) => {
  res.render('bot', {
    currentPage: 'bots',
  });
});

viewRouter.get('/user/broadcast', authenticatedMiddleware, attachUserToLocals, async (req, res) => {
  res.render('broadcast', {
    currentPage: 'broadcast',
  });
});

viewRouter.get(
  '/user/subscriber',
  authenticatedMiddleware,
  attachUserToLocals,
  async (req, res) => {
    res.render('subscriber', {
      currentPage: 'subscriber',
    });
  }
);

viewRouter.get('/user/teams', authenticatedMiddleware, attachUserToLocals, async (req, res) => {
  res.render('teams', {
    currentPage: 'teams',
  });
});

viewRouter.get('/user/settings', authenticatedMiddleware, attachUserToLocals, async (req, res) => {
  res.render('settings', {
    currentPage: 'settings',
  });
});

export default viewRouter;
