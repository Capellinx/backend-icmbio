import { RegistrationStatus } from "@prisma/client"
import { CreateCollaboratorDTO } from "../use-cases/collaborator/create-collaborator/create-collaborator-dto"
export interface ICollaboratorsRepository {
   save({ name, email, password, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void>
   findByEmail(email: string): Promise<any>
   existCpf(cpf: string): Promise<boolean>
   findById(id: string): Promise<ICollaboratorsRepository.FindByIdOutput | null>
   approveCollaborator(id: string): Promise<void>
   rejectCollaborator(id: string): Promise<void>
}

export namespace ICollaboratorsRepository {
   export type FindByEmailOutput = {
      email: string
   }

   export type FindByIdOutput = {
      id: string
      name: string
      email: string
      person_type: string
      phone: string
      registration_status: RegistrationStatus
   }
}