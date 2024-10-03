import { Request, Response } from "express";
import { ApproveCollaboratorUseCase } from "./approve-collaborator";


export class ApproveCollaboratorController {
   constructor(
      private approveCollaboratorUseCase: ApproveCollaboratorUseCase
   ) { }
   
   async handle(request: Request, response: Response) {
      const { id } = request.params

      const { success, message } = await this.approveCollaboratorUseCase.execute(id)

      return response.status(201).json({ success, message }) 
   }
}