import { ApiError } from "../../config/error/api.error";
import { IUpdateTemporaryAgentRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";



export class UpdateInfoTemporaryAgentUseCase {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository
   ) { }

   async execute({ id, name, email, thematic_area }: IUpdateTemporaryAgentRequestDTO): Promise<void> {
      const temporaryAgentIdExist = await this.temporaryAgentRepository.findById(id)

      if (!temporaryAgentIdExist?.id) {
         throw new ApiError("Temporary agent not found", 404)
      }

      await this.temporaryAgentRepository.update(
         temporaryAgentIdExist.id,
         {
            name,
            email,
            thematic_area,
         }
      )
   }
}