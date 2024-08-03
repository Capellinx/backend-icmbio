import { Request, Response } from "express";
import { SendMessageToResetPasswordUseCase } from "./send-messsage-to-reset-password";

export class SendMessageToResetPasswordController {
   constructor(
      private sendMessageToResetPasswordUseCase: SendMessageToResetPasswordUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { email } = request.body

      await this.sendMessageToResetPasswordUseCase.execute({
         email
      })

      return response.status(200).json({ message: "Email sent" })
   }
}