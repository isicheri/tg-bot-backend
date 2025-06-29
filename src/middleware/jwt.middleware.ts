import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import HttpMainError from "../libs/error/httpMainError";
import { ApiLogger } from "../config/logger/apiLogger";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) throw new HttpMainError("Unauthorised",401,"authorizaton error",null);

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch(error) {
    new ApiLogger().error("Authorization error");
    next(error);
  }
};
