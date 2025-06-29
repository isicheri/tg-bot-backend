import passport  from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import { validatePassword } from "../../libs/helpers";
import { UserService } from "../../modules/user/user.service";

let userService:UserService;

passport.use(new LocalStrategy(async(username,password,done) => {
    try {
        userService = new UserService();
     const user = await userService.findUserByUsername(username);
      if (!user) return done(null, false, { message: "Incorrect username" });

      const isValid = await validatePassword(password, user.password);
      if (!isValid) return done(null, false, { message: "Incorrect password" });

      return done(null, user);  // Pass the user object to req.user
    } catch (error) {
        return done(error)
    }
}))
