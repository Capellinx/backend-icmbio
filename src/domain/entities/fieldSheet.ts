import { randomUUID } from "crypto"
import { Question } from "./question"
import { Awnser } from "./awnser"

export class FieldSheet {
   id: string
   title: string
   description: string
   questions: Question[]
   temporaryAgent_id: string
   awnsers: Awnser[]

   constructor(title: string, description: string, questions: Question[], awnser: Awnser[], temporaryAgent_id: string, id?: string){
      this.id = id || randomUUID()
      this.title = title
      this.description = description
      this.questions = questions
      this.temporaryAgent_id = temporaryAgent_id
      this.awnsers = awnser
   }
}