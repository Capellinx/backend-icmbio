import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";


export class GetPublicInformationUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository
   ) { }

   async execute(publicId: string) {
      const collaborator = await this.collaboratorsRepository.findPublicId(publicId);

      if (!collaborator) throw new ApiError("Public id not found", 404);

      return { collaborator }
   }
}