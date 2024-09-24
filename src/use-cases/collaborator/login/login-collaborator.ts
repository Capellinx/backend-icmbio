import { ApiError } from "../../../error";
import { IEncryptionPasswordService } from "../../../services/encryption-password.service";
import { IToken } from "../../../services/token.service";
import { ICollaboratorsRepository } from './../../../repositories/collaborators';
import { LoginCollaboratorDTO } from "./login-dto";

export class LoginCollaboratorUseCase {
   constructor(
      private collaboratorReposity: ICollaboratorsRepository,
      private encryptPasswordService: IEncryptionPasswordService,
      private tokenService: IToken
   ) { }

   async execute({ email, password }: LoginCollaboratorDTO): Promise<LoginCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorReposity.findByEmail(email)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      const passwordMatch = await this.encryptPasswordService.compare(password, collaborator.password)

      if (!passwordMatch) throw new ApiError("Invalid password", 401)

      const token = await this.tokenService.generateToken({ id: collaborator.id })

      console.log(token)

      return {
         access_token: token,
         collaborator: {
            id: collaborator.id,
            name: collaborator.name,
            email: collaborator.email,
            role: collaborator.role
         }
      }
   }
}

export namespace LoginCollaboratorUseCase {
   export type Output = {
      access_token: string
      collaborator: {
         id: string
         name: string
         email: string
         role: string
      }
   }
}