import { randomUUID } from "node:crypto"

export class TemporaryAgent {
   id: string
   name: string
   email: string
   password: string
   thematic_area: string
   role: number

   constructor(name: string, email: string, password: string, thematic_area: string, role: number, id?: string) {
      this.id = id || randomUUID()
      this.name = name
      this.email = email
      this.password = password
      this.thematic_area = thematic_area
      this.role = role
   }
}