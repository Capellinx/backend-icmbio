import { Request, Response } from "express";
import { ResetPasswordTemporaryAgentUseCase } from "./reset-password-temporary-agent";

export class ResetTemporaryAgentPasswordController {
   constructor(
      private resetPasswordTemporaryAgentUseCase: ResetPasswordTemporaryAgentUseCase 
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const { password } = request.body

      await this.resetPasswordTemporaryAgentUseCase.execute({
         id,
         password
      })

      return response.status(200).json({ message: "Password was updated." })
   }
}