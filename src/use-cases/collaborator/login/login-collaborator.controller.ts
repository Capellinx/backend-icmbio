import { Request, Response } from "express";
import { LoginCollaboratorUseCase } from "./login-collaborator";


export class LoginController {

   constructor(
      private loginUseCase: LoginCollaboratorUseCase
   ) { }

   async handle(request: Request, response: Response) {
      const { email, password } = request.body

      const collaborator = await this.loginUseCase.execute({ email, password })
      
      return response.status(200).json(collaborator)
   }
}