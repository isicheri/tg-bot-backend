"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("./middleware/auth.middleware");
const user_local_middleware_1 = require("./middleware/user.local.middleware");
const viewRouter = (0, express_1.Router)();
viewRouter.get('/', (req, res) => {
    res.render('home');
});
viewRouter.get('/pricing', (req, res) => {
    res.render('pricing');
});
viewRouter.get('/signin', (req, res) => {
    res.render('signin');
});
viewRouter.get('/user/dashboard', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('dashboard', {
        currentPage: 'dashboard',
    });
});
viewRouter.get('/user/bots', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('bot', {
        currentPage: 'bots',
    });
});
viewRouter.get('/user/broadcast', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('broadcast', {
        currentPage: 'broadcast',
    });
});
viewRouter.get('/user/subscriber', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('subscriber', {
        currentPage: 'subscriber',
    });
});
viewRouter.get('/user/teams', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('teams', {
        currentPage: 'teams',
    });
});
viewRouter.get('/user/settings', auth_middleware_1.authenticatedMiddleware, user_local_middleware_1.attachUserToLocals, async (req, res) => {
    res.render('settings', {
        currentPage: 'settings',
    });
});
exports.default = viewRouter;
