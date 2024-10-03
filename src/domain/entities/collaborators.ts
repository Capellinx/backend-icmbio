import { PersonType, Role } from "@prisma/client"
interface IProps {
   name: string
   email: string
   password: string
   person_type: PersonType
   cpf: string
   phone: string
   createdAt: Date
   updatedAt: Date
   public_id: string
   role: Role
}

export class Collaborator {
   public id: string
   public name: string
   public email: string
   public cpf: string
   public phone: string
   public password: string
   public public_id: string
   public person_type: PersonType
   public createdAt: Date
   public updatedAt: Date
   public role: Role


   constructor(props: IProps, id?: string) {
      this.id = id ?? crypto.randomUUID()
      this.name = props.name
      this.email = props.email
      this.cpf = props.cpf
      this.phone = props.phone
      this.password = props.password
      this.createdAt = props.createdAt
      this.person_type = props.person_type
      this.person_type = props.person_type
      this.updatedAt = props.updatedAt
      this.role = props.role
      this.public_id = this.id

   }
}