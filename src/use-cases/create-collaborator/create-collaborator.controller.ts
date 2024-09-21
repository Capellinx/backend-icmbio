import { Request, Response } from "express";
import { CreateCollaboratorUseCase } from "./create-collaborator";


export class CreateCollaboratorController {
   constructor(
      private createCollaboratorUseCase: CreateCollaboratorUseCase
   ){}

   async handle(request: Request, response: Response) {
      const { name, email, password, createdAt, person_type, cpf, phone } = request.body;

      await this.createCollaboratorUseCase.execute({
         name,
         email,
         password,
         createdAt,
         person_type,
         cpf,
         phone
      })

      return response.status(201).send()
   }
}