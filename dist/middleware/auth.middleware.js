"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopCache = exports.authenticatedMiddleware = void 0;
const authenticatedMiddleware = (req, res, next) => {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
};
exports.authenticatedMiddleware = authenticatedMiddleware;
const stopCache = (req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
};
exports.stopCache = stopCache;
