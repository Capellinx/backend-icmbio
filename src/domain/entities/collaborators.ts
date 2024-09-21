
export class Collaborator {
   public id: string
   public name: string
   public email: string
   public cpf: string
   public phone: string
   public password: string
   public createdAt: Date
   public person_type: string

   constructor(id: string, name: string, email: string, password: string, createdAt: Date, person_type: string, cpf: string, phone: string) {
      this.id = id ?? crypto.randomUUID()
      this.name = name
      this.email = email
      this.cpf = cpf
      this.phone = phone
      this.password = password
      this.createdAt = createdAt
      this.person_type = person_type
   }
}