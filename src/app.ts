import express from 'express';
import helmet from 'helmet';
import passport from "passport";
// import cors from "cors";
import dotenv from 'dotenv';
import requestLoggerMiddleware from './config/logger/requestLogger';
import limiter from './config/ratelimit/ratelimiter';
import { ApiLogger } from './config/logger/apiLogger';
import indexRouter from './routes';
import errorMiddleware from './middleware/error.middleware';
import "./config/passport/passport"

dotenv.config();

const App = express();
export const logger = new ApiLogger();
logger.info('initializiation');

App.use(helmet());
App.use(express.json());
App.use(passport.initialize())
// App.use(cors())

App.use("/api",indexRouter)

App.use(limiter);

App.use(requestLoggerMiddleware);

App.use(errorMiddleware)
export default App;
