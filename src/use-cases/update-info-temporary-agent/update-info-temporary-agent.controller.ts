import { Request, Response } from "express";
import { UpdateInfoTemporaryAgentUseCase } from "./update-info-temporary-agent";

export class UpdateInfoTemporaryAgentController {
   constructor(
      private updateInfoTemporaryAgentUseCase: UpdateInfoTemporaryAgentUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const { name, email, thematic_area } = request.body

      await this.updateInfoTemporaryAgentUseCase.execute({ id, name, email, thematic_area })

      return response.status(200).json({ message: "Temporary agent updated." })
   }
}