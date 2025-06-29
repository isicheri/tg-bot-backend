import { Router } from "express";
import userRouter from "./modules/user/user.routes";
import authRouter from "./modules/auth/auth.routes";
const indexRouter = Router();

indexRouter.use("/auth",authRouter);
indexRouter.use("/user",userRouter);

export default indexRouter;