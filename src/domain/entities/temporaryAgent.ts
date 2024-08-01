import { Roles } from "@prisma/client"
import { randomUUID } from "node:crypto"

export class TemporaryAgent {
   id: string
   name: string
   email: string
   password: string
   thematic_area: string
   role: Roles = Roles.USER

   constructor(name: string, email: string, password: string, thematic_area: string, id?: string) {
      this.id = id || randomUUID()
      this.name = name
      this.email = email
      this.password = password
      this.thematic_area = thematic_area
   }
}