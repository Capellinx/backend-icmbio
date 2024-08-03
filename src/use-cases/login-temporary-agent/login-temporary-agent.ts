import { ApiError } from "../../config/error/api.error";
import { ILoginTemporaryAgentRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { IPasswordHash } from "../../interfaces/password.interface";
import { IToken } from "../../interfaces/token.interface";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";

export class LoginTemporaryAgentUseCase {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository,
      private passwordHash: IPasswordHash,
      private token: IToken
   ) { }

   async execute({ email, password }: ILoginTemporaryAgentRequestDTO): Promise<any> {
      const temporaryAgentExists = await this.temporaryAgentRepository.findByEmail(email)

      if(!temporaryAgentExists?.email){
         throw new ApiError("Temporary agent not found", 404)
      }

      const passwordMatch = await this.passwordHash.comparePassword(password, temporaryAgentExists.password)

      if(!passwordMatch){
         throw new ApiError("Incorrect password", 401)
      }
      
      const token = await this.token.generateToken(temporaryAgentExists.id)

      return {
         accessToken: token,
         user: {
            ...temporaryAgentExists
         }
      }
   }
}