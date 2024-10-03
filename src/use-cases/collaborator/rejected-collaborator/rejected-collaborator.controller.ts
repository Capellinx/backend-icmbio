import { Request, Response } from "express";
import { RejectedCollaboratorUseCase } from "./rejected-collaborator";


export class RejectedCollaboratorController {
   constructor(
      private rejectedCollaboratorUseCase: RejectedCollaboratorUseCase
   ){}

   async handle(request: Request, response: Response) {
      const { id } = request.params

      const { success, message } = await this.rejectedCollaboratorUseCase.execute(id)

      return response.status(201).json({ success, message })
   }
}