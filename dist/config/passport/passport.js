"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const helpers_1 = require("../../libs/helpers");
const user_service_1 = require("../../modules/user/user.service");
const userService = new user_service_1.UserService();
passport_1.default.use(new passport_local_1.Strategy({ usernameField: 'username' }, async (username, password, done) => {
    try {
        const user = await userService.findUserByUsername(username);
        if (!user)
            return done(null, false, { message: 'Incorrect username' });
        const isValid = await (0, helpers_1.validatePassword)(password, user.password);
        if (!isValid)
            return done(null, false, { message: 'Incorrect password' });
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
}));
// Serialize user to store user.id in session
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
// Deserialize user from session using userService
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await userService.findUserById(id);
        done(null, user);
    }
    catch (err) {
        done(err);
    }
});
