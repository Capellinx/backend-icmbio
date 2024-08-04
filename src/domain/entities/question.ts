import { randomUUID } from "crypto"

export class Question {
   id: string
   title: string
   description: string
   field_sheet_id: string

   constructor(title: string, description: string, field_sheet_id: string, id?: string) {
      this.id = id || randomUUID()
      this.title = title
      this.description = description
      this.field_sheet_id = field_sheet_id
   }
}