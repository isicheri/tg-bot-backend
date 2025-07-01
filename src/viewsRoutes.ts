import { Router, Request, Response } from 'express';
import { authenticatedMiddleware, stopCache } from './middleware/auth.middleware';

const viewRouter = Router();

viewRouter.get('/', (req: Request, res: Response) => {
  res.render('home');
});

viewRouter.get('/signin', (req, res) => {
  res.render('signin');
});

viewRouter.get('/dashboard', stopCache, authenticatedMiddleware, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logoImg.svg" type="image/x-icon" />
      <title>Dashboard - Coming Soon</title>
      <style>
        body {
          display: flex;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          justify-content: center;
          align-items: center;
          text-align: center;
          user-select: none;
        }
        h1 {
          font-size: 4rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 900;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
        }
      </style>
    </head>
    <body>
      <h1>Coming Soon</h1>
    </body>
    </html>
  `);
});

export default viewRouter;
