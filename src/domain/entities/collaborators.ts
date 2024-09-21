type Role = {
   ADMIN: "ADMIN",
   USER: "USER"
}
interface IProps {
   name: string
   email: string
   password: string
   person_type: string
   cpf: string
   phone: string
   createdAt: Date
   updatedAt: Date
   role: Role
}

export class Collaborator {
   public id: string
   public name: string
   public email: string
   public cpf: string
   public phone: string
   public password: string
   public person_type: string
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

   }
}