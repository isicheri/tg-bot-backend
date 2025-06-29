import { NextFunction, Request, Response } from "express";
import HttpMainError from "../libs/error/httpMainError";

const errorMiddleware = (err:HttpMainError,req:Request,res:Response,next:NextFunction) =>  {
    res.status(err.statusCode ?? 500).json({
        name: err.errname,
        message: err.message,
        status: false,
    })
}

export default errorMiddleware;