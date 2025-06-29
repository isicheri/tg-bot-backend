import { Request,Response,NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import HttpMainError from "../../libs/error/httpMainError";
import { AuthServices } from "./auth.service";
import { registerUserSchema } from "./auth.validation";
import { logger } from "../../app";

let authService:AuthServices;


export const register = async(req: Request, res: Response, next: NextFunction) => {
    const parsedBody = registerUserSchema.safeParseAsync(req.body);
    if(!(await parsedBody).success) throw new HttpMainError((await parsedBody).error?.message || "cannot validate input!",402,(await parsedBody).error?.name || "validation error",(await parsedBody).error?.errors || null);
   authService = new AuthServices();
   const username = (await parsedBody).data?.username;
   const password = (await parsedBody).data?.password;
     if ( !username|| !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  try {
    const user = await authService.register(username,password);
    logger.success("User created successfully")
    return res.status(201).json({ message: "User created successfully", user: { id: user.id, username: user.username } });
  } catch (error) {
if(error instanceof HttpMainError) throw new HttpMainError(error.message,400,"Registreation error",error);
  logger.error("Registration failed")
  }
}


export const login = (req: Request, res: Response, next: NextFunction) => {
    logger.info("user trying to login")
  passport.authenticate("local", { session: false }, (err: HttpMainError, user: { id: string; username: string; }, info: { message: string; }) => {
    if (err) return next(err);
    if (!user) throw new HttpMainError(info?.message ||"Authentication failed",401,"authentication error",null);

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return res.json({ token });
  })(req, res, next);
};