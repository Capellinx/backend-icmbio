import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";


export class HandleErros {
   constructor() { }

   static execute(error: ApiError | Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof ApiError) {
         return res.status(error.statusCode).json({ error: error.message });
      }

      if (error instanceof PrismaClientKnownRequestError) {
         return res.status(500).json({ error: 'Internal Server Error.' });
      }

      if (error instanceof ZodError) {
         return res.status(500).json(error.errors);
      }

      return res.status(500).json({ message: "Internal Server Error." })
   }
}