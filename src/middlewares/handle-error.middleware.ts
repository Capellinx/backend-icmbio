import "express-async-errors"
import { NextFunction, Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ApiError } from "../config/error/api.error";
import { ZodError } from "zod";

export class handleErrors {
   static execute(error: Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof ApiError) {
         console.log(error.message)
         return res.status(error.statusCode).json({ message: error.message });
      }

      if (error instanceof PrismaClientKnownRequestError) {
         return res.status(500).json({ error: 'Internal Server Error.' });
      }

      if(error instanceof ZodError){
         return res.status(500).json({ error: 'Internal Server Error.' });
      }

      return res.status(500).json({ message: "Internal Server Error." })
   }
}
