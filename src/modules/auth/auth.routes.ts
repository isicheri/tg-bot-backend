import { Router } from "express";
import { login, register } from "./auth.controller";
import { responseHandler } from "../../libs/handlers/response.handler";

const authRouter = Router();

authRouter.post("/register",responseHandler(register))
authRouter.post("/login", responseHandler(login));

export default authRouter;
