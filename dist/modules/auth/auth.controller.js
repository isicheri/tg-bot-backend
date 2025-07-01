"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const passport_1 = __importDefault(require("passport"));
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const auth_service_1 = require("./auth.service");
const auth_validation_1 = require("./auth.validation");
const app_1 = require("../../app");
let authService;
const register = async (req, res) => {
    const parsedBody = await auth_validation_1.registerUserSchema.safeParseAsync(req.body);
    if (!parsedBody.success) {
        const formattedErrors = parsedBody.error.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0].message || 'Validation failed', 400, parsedBody.error.name || 'validation error', formattedErrors);
    }
    authService = new auth_service_1.AuthServices();
    const username = parsedBody.data.username;
    const password = parsedBody.data.password;
    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required' });
        return;
    }
    try {
        const user = await authService.register(username, password);
        app_1.logger.success('User created successfully');
        res.status(201).json({
            message: 'User created successfully',
            user: { id: user.id, username: user.username },
        });
        return;
    }
    catch (error) {
        if (error instanceof httpMainError_1.default)
            throw new httpMainError_1.default(error.message, 400, 'Registreation error', error);
        app_1.logger.error('Registration failed');
    }
};
exports.register = register;
const login = (req, res, next) => {
    app_1.logger.info('user trying to login');
    passport_1.default.authenticate('local', { session: false }, (err, user, info) => {
        if (err)
            return next(err);
        if (!user)
            throw new httpMainError_1.default(info?.message || 'Authentication failed', 400, 'authentication error', null);
        req.logIn(user, (err) => {
            if (err)
                return next(err);
            return res.json({ status: true, message: 'Login successful' });
        });
    })(req, res, next);
};
exports.login = login;
const logout = (req, res) => {
    req.logout((err) => {
        if (err)
            return res.status(500).json({ message: 'Error logging out' });
        res.json({ message: 'Logged out successfully' });
    });
};
exports.logout = logout;
