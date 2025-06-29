import { Request,Response,NextFunction } from "express"
import { ZodError } from "zod";
import HttpMainError from "../error/httpMainError";

export const responseHandler = (method:Function) => async(req:Request,res:Response,next:NextFunction) => {
 try {
    await method(req,res,next);
 } catch (error) {
    let exceptions:HttpMainError;
            if(error instanceof HttpMainError) {
             exceptions = error;
            }else {
                if(error instanceof ZodError) {
               exceptions = new HttpMainError("input validation error",402,"validation error",error)
                }else {
                 exceptions = new HttpMainError("something went wrong!",500,"server error",error);
                }
            }
            next(exceptions);
 }
}