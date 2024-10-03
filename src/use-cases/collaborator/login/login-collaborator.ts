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

   async execute({
      email,
      password
   }: LoginCollaboratorDTO): Promise<LoginCollaboratorUseCase.LoginOutput | LoginCollaboratorUseCase.FirstLoginOutput> {
      const collaborator = await this.collaboratorReposity.findByEmail(email)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      if (collaborator.first_login === true) {
         return {
            first_login: true,
         }
      }

      const passwordMatch = await this.encryptPasswordService.compare(password, collaborator.password)

      if (!passwordMatch) throw new ApiError("Invalid password", 401)

      const token = await this.tokenService.generateToken({ id: collaborator.id })

      return {
         access_token: token,
         collaborator: {
            id: collaborator.id,
            name: collaborator.name,
            email: collaborator.email,
            collaborator_roles: {
               role: collaborator.role
            }
         }
      }
   }
}

export namespace LoginCollaboratorUseCase {
   export type LoginOutput = {
      access_token: string
      collaborator: {
         id: string
         name: string
         email: string
         collaborator_roles: {
            role: string
         }
      }
   }

   export type FirstLoginOutput = {
      first_login: boolean
   }
}