import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error";


export class HandleErros {
   constructor(){}

   static execute(error: Error, request: Request, response: Response, next: NextFunction) {
      if(error instanceof ApiError){
         return response.status(error.statusCode).json({ message: error.message });
      }
   }
}