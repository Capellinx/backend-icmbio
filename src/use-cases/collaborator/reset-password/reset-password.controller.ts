import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./reset-password";


export class ResetPasswordController {
   constructor(
      private resetPasswordUseCase: ResetPasswordUseCase
   ) {}

   async handle(request: Request, response: Response) {
      const { id } = request.params
      const { password } = request.body

      await this.resetPasswordUseCase.execute(id, password)

      return response.status(201).json({})
   }
}	