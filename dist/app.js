"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
// import cookieParser from 'cookie-parser';
// import pgSession from 'connect-pg-simple';
// import { Pool } from 'pg';
const requestLogger_1 = __importDefault(require("./config/logger/requestLogger"));
const ratelimiter_1 = __importDefault(require("./config/ratelimit/ratelimiter"));
const apiLogger_1 = require("./config/logger/apiLogger");
const routes_1 = __importDefault(require("./routes"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const path_1 = __importDefault(require("path"));
require("./config/passport/passport");
const viewsRoutes_1 = __importDefault(require("./viewsRoutes"));
const httpMainError_1 = __importDefault(require("./libs/error/httpMainError"));
dotenv_1.default.config();
const App = (0, express_1.default)();
// const isProduction = process.env.NODE_ENV === 'production';
// const PgSession = pgSession(session)
exports.logger = new apiLogger_1.ApiLogger();
exports.logger.info('initializiation');
App.use(ratelimiter_1.default);
// const pgPool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// App.use(cookieParser());
App.use((0, helmet_1.default)());
App.use(express_1.default.json());
App.use((0, express_session_1.default)({
    // store: new PgSession({
    //   pool: pgPool,
    //   tableName: "user_sessions",
    //   createTableIfMissing: true
    // }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
}));
App.use(passport_1.default.initialize());
App.use(passport_1.default.session());
App.set('view engine', 'ejs');
App.set('views', path_1.default.join(process.cwd(), 'views'));
App.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
App.use(requestLogger_1.default);
App.use('/api', routes_1.default);
App.use('/', viewsRoutes_1.default);
App.use((req, res) => {
    exports.logger.error(`404 - Not Found: ${req.method} ${req.originalUrl}`);
    if (req.originalUrl.startsWith('/api') ||
        req.xhr ||
        req.headers.accept?.includes('application/json')) {
        throw new httpMainError_1.default('route not found', 404, 'Not found error', null);
    }
    return res.status(404).render('404');
});
App.use(error_middleware_1.default);
exports.default = App;
