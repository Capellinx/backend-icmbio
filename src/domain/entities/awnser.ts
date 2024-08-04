import { randomUUID } from "crypto"

export class Awnser {
   id: string
   field_sheet_id: string
   temporary_agent_id: string

   constructor(field_sheet_id: string, temporary_agent_id: string, id?: string) {
      this.id = id || randomUUID()
      this.field_sheet_id = field_sheet_id
      this.temporary_agent_id = temporary_agent_id
   }
}