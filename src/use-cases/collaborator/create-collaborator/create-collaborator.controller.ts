import { Request, Response } from "express";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { Role } from "@prisma/client";


export class CreateCollaboratorController {
   constructor(
      private createCollaboratorUseCase: CreateCollaboratorUseCase
   ) { }

   async handle(request: Request, response: Response) {
      const { name, email, password, person_type, cpf, phone, role } = request.body;

      const { success, id } = await this.createCollaboratorUseCase.execute({
         name,
         email,
         password,
         person_type,
         cpf,
         role,
         phone
      })

      return response.status(201).json({
         id,
         success,
      })
   }
}