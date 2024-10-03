import { CreateCollaboratorDTO } from "../use-cases/collaborator/create-collaborator/create-collaborator-dto"
export interface ICollaboratorsRepository {
   save({ name, email, password, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void>
   findByEmail(email: string): Promise<any>
   existCpf(cpf: string): Promise<boolean>
}

export namespace ICollaboratorsRepository {
   export type FindByEmailOutput = {
      email: string
   }
}