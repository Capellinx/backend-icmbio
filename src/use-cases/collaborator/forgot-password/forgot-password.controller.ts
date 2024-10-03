import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./forgot-password";


export class ForgotPasswordController {
   constructor(
      private forgotPasswordUseCase: ForgotPasswordUseCase
   ){}

   async handle(request: Request, response: Response) {
      const { email } = request.body;

      await this.forgotPasswordUseCase.execute(email);

      return response.status(201).json({})
   }
}