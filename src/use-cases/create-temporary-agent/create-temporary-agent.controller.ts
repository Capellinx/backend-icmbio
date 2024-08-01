import { Request, Response } from "express";
import { CreateTemporaryAgent } from "./create-temporary-agent";

export class TemporaryAgentController {
   constructor(
      private createTemporaryAgentUseCase: CreateTemporaryAgent
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { name, email, password, thematic_area } = request.body;

      try {
         await this.createTemporaryAgentUseCase.execute({
            name,
            email,
            password,
            thematic_area
         });

         return response.status(201).send()
      } catch (error) {
         return response.status(400).json({
            message: error || 'Unexpected error.'
         })
      }
   }
}