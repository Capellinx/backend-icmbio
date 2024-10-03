import { RegistrationStatus } from "@prisma/client"
import { CreateCollaboratorDTO } from "../use-cases/collaborator/create-collaborator/create-collaborator-dto"
export interface ICollaboratorsRepository {
   save({ name, email, password, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void>
   findByEmail(email: string): Promise<any>
   existCpf(cpf: string): Promise<boolean>
   findById(id: string): Promise<ICollaboratorsRepository.FindByIdOutput | null>
   approveCollaborator(id: string, password: string): Promise<ICollaboratorsRepository.ApproveCollaboratorOutput>
   rejectCollaborator(id: string): Promise<void>
   updatePassword(id: string, password: string): Promise<void>
   findPublicId(id: string): Promise<ICollaboratorsRepository.FindPublicIdOutput>
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

   export type ApproveCollaboratorOutput = {
      name: string,
      email: string
   }

   export type FindPublicIdOutput = {
      email: string
      name: string
      phone: string
      person_type: string
   }
}