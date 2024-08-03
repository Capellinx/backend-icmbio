import { Request, Response } from "express";
import { CreateTemporaryAgent } from "./create-temporary-agent";

export class TemporaryAgentController {
   constructor(
      private createTemporaryAgentUseCase: CreateTemporaryAgent
   ) { }
   async handle(request: Request, response: Response): Promise<Response> {
      const { name, email, password, thematic_area, role } = request.body;

      await this.createTemporaryAgentUseCase.execute({
         name,
         email,
         password,
         thematic_area,
         role
      });

      return response.status(201).send()
   }
}