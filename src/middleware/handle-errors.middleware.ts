import e, { NextFunction, Request, Response } from "express";
import { ApiError } from "../error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";


export class HandleErros {
   constructor() { }

   static execute(error: ApiError | Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof ApiError) {
         console.log(error);

         return res.status(error.statusCode).json({ error: error.message });
      }
      console.log(error);

      if (error instanceof PrismaClientKnownRequestError) {
         console.log(error);
         return res.status(500).json({ error: error.message });
      }

      if (error instanceof ZodError) {
         console.log(error);

         return res.status(500).json(error.errors);
      }

      return res.status(500).json({ message: error.message });
   }
}