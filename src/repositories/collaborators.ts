import { CreateCollaboratorDTO } from "../domain/dto/collaborator";

export interface ICollaboratorsRepository {
   save({ name, email, password, createdAt, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void>
   findByEmail(email: string): Promise<any>
}

export namespace ICollaboratorsRepository {
   export type FindByEmailOutput = {
      email: string
   }
}