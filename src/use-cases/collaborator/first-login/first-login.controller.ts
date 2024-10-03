import { Request, Response } from "express";
import { FirstLoginUseCase } from "./first-login";

export class FirstLoginController { 

   constructor(
      private firstLoginUseCase: FirstLoginUseCase
   ){}

   async handle(request: Request, response: Response) {
      const { password } = request.body;

      await this.firstLoginUseCase.execute({ password, id: request.params.id });

      return response.status(201).json({})
   }
}