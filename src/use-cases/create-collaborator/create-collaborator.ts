import { Role } from "@prisma/client";
import { CreateCollaboratorDTO } from "../../domain/dto/collaborator";
import { Collaborator } from "../../domain/entities/collaborators";
import { ApiError } from "../../error";
import { ICollaboratorsRepository } from "../../repositories/collaborators";


export class CreateCollaboratorUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<CreateCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorsRepository.findByEmail(payload.email);

      if (collaborator) throw new ApiError("Collaborator already exists", 400)

      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         password: payload.password,
         person_type: payload.person_type,
         cpf: payload.cpf,
         phone: payload.phone,
         role: payload.role!,
         createdAt: new Date(),
         updatedAt: new Date()
      });

      await this.collaboratorsRepository.save(newCollaborator)

      return {
         success: true,
         id: newCollaborator.id
      }
   }
}

export namespace CreateCollaboratorUseCase {
   export type Output = {
      success: boolean
      id?: string
   }
}