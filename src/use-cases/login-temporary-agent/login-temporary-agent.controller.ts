import { Request, Response } from "express";
import { LoginTemporaryAgentUseCase } from "./login-temporary-agent";

export class LoginTemporaryAgentController {
   constructor(
      private loginTemporaryAgentUseCase: LoginTemporaryAgentUseCase
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { email, password } = request.body

      const temporaryAgentLogin = await this.loginTemporaryAgentUseCase.execute({
         email,
         password,
      });
      
      return response.status(200).json(temporaryAgentLogin)
   }
}