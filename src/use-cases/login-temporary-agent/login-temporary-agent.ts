import { PasswordAtuhGuard } from "../../auth/password.auth";
import { TokenAuthGuard } from "../../auth/token.auth";
import { ApiError } from "../../config/error/api.error";
import { ILoginTemporaryAgentRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";

export class LoginTemporaryAgentUseCase {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository
   ) { }

   async execute({ email, password }: ILoginTemporaryAgentRequestDTO): Promise<any> {
      const temporaryAgentExists = await this.temporaryAgentRepository.findByEmail(email)

      if(!temporaryAgentExists?.email){
         throw new ApiError("Temporary agent not found", 404)
      }

      const passwordMatch = await PasswordAtuhGuard.comparePassword(password, temporaryAgentExists.password)

      if(!passwordMatch){
         throw new ApiError("Incorrect password", 401)
      }
      
      const token = await TokenAuthGuard.generateToken(temporaryAgentExists.id)

      return {
         accessToken: token,
         user: {
            ...temporaryAgentExists
         }
      }
   }
}