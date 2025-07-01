import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { validatePassword } from '../../libs/helpers';
import { UserService } from '../../modules/user/user.service';
import { PassportUser } from '../../modules/user/types/user.types';

const userService = new UserService();

passport.use(
  new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    try {
      const user = await userService.findUserByUsername(username);
      if (!user) return done(null, false, { message: 'Incorrect username' });

      const isValid = await validatePassword(password, user.password);
      if (!isValid) return done(null, false, { message: 'Incorrect password' });

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize user to store user.id in session
passport.serializeUser((user: PassportUser, done) => {
  done(null, user.id);
});

// Deserialize user from session using userService
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await userService.findUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
