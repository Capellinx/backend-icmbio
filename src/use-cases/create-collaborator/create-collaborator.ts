import { CreateCollaboratorDTO } from "../../domain/dto/collaborator";
import { Collaborator } from "../../domain/entities/collaborators";
import { ApiError } from "../../error";
import { ICollaboratorsRepository } from "../../repositories/collaborators";


export class CreateCollaboratorUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository
   ) { }

   async execute({ name, email, password, createdAt, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void> {
      const collaborator = await this.collaboratorsRepository.findByEmail(email);

      if (collaborator) throw new ApiError("Collaborator already exists", 400);

      const newCollaborator = new Collaborator(
         crypto.randomUUID(),
         name,
         email,
         password,
         createdAt,
         person_type,
         cpf,
         phone
      );

      await this.collaboratorsRepository.save(newCollaborator)

      return 
   }
}