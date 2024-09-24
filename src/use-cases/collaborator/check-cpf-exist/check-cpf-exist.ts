import { CreateCollaboratorDTO } from "../../../domain/dto/collaborator";
import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";


export class CheckCpfExistUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
   ) { }

   async execute(cpf: string): Promise<boolean> {
      const collaborator = await this.collaboratorsRepository.existCpf(cpf);
      console.log(cpf);
      if (collaborator) throw new ApiError("CPF already exists", 400)

      return false
   }
}
