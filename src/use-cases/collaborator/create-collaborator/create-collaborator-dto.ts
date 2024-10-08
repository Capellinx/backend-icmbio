import { PersonType, Role } from "@prisma/client"

export interface CreateCollaboratorDTO {
   id?: string
   name: string
   email: string
   person_type: PersonType
   password?: string,
   cpf: string
   matricula: string
   phone: string
   role?: Role
}
