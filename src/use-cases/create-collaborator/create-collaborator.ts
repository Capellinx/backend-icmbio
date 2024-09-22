import { Role } from "@prisma/client";
import { CreateCollaboratorDTO } from "../../domain/dto/collaborator";
import { Collaborator } from "../../domain/entities/collaborators";
import { ApiError } from "../../error";
import { ICollaboratorsRepository } from "../../repositories/collaborators";
import { IEncryptionPasswordService } from "../../services/encryption-password.service";


export class CreateCollaboratorUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private encryptPasswordService: IEncryptionPasswordService
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<CreateCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorsRepository.findByEmail(payload.email);

      if (collaborator) throw new ApiError("Collaborator already exists", 400)

      const password = await this.encryptPasswordService.encrypt(payload.password);

      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         password,
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