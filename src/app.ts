import express from 'express';
import helmet from 'helmet';
import passport from 'passport';
import dotenv from 'dotenv';
import session from 'express-session';
// import cookieParser from 'cookie-parser';
// import pgSession from 'connect-pg-simple';
// import { Pool } from 'pg';
import requestLoggerMiddleware from './config/logger/requestLogger';
import limiter from './config/ratelimit/ratelimiter';
import { ApiLogger } from './config/logger/apiLogger';
import indexRouter from './routes';
import errorMiddleware from './middleware/error.middleware';
import path from 'path';
import './config/passport/passport';
import viewsRouter from './viewsRoutes';
import HttpMainError from './libs/error/httpMainError';

dotenv.config();

const App = express();
// const isProduction = process.env.NODE_ENV === 'production';
// const PgSession = pgSession(session)
export const logger = new ApiLogger();
logger.info('initializiation');
App.use(limiter);
// const pgPool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// App.use(cookieParser());
App.use(helmet());
App.use(express.json());
App.use(
  session({
    // store: new PgSession({
    //   pool: pgPool,
    //   tableName: "user_sessions",
    //   createTableIfMissing: true
    // }),
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
App.use(passport.initialize());
App.use(passport.session());

App.set('view engine', 'ejs');
App.set('views', path.join(process.cwd(), 'views'));
App.use(express.static(path.join(process.cwd(), 'public')));
App.use(requestLoggerMiddleware);

App.use('/api', indexRouter);
App.use('/', viewsRouter);
App.use((req, res) => {
  logger.error(`404 - Not Found: ${req.method} ${req.originalUrl}`);
  if (
    req.originalUrl.startsWith('/api') ||
    req.xhr ||
    req.headers.accept?.includes('application/json')
  ) {
    throw new HttpMainError('route not found', 404, 'Not found error', null);
  }
  return res.status(404).render('404');
});
App.use(errorMiddleware);
export default App;
