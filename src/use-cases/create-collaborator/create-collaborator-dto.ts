import { PersonType, Role } from "@prisma/client"

export interface CreateCollaboratorDTO {
   id?: string
   name: string
   email: string
   password: string
   person_type: PersonType
   cpf: string
   phone: string
   role?: Role
}
