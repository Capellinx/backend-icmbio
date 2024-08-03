import { ApiError } from "../../config/error/api.error";
import { ICreateTemporaryAgentRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { TemporaryAgent } from "../../domain/entities/temporaryAgent";
import { IMailProvider } from "../../interfaces/email.interface";
import { IPasswordHash } from "../../interfaces/password.interface";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";

export class CreateTemporaryAgent {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository,
      private passwordHash: IPasswordHash,
      private emailProvider: IMailProvider
   ) { }

   async execute({ name, email, password, thematic_area, role }: ICreateTemporaryAgentRequestDTO) {
      const temporaryAgentExists = await this.temporaryAgentRepository.findByEmail(email)

      if (temporaryAgentExists) {
         throw new ApiError("Temporary agent already exists", 400)
      }
      
      const hashedPassword = await this.passwordHash.hashPassword(password)

      const newTemporaryAgent = new TemporaryAgent(name, email, hashedPassword, thematic_area, role)

      await Promise.all([
         this.emailProvider.sendMail({
            to: {
               name: newTemporaryAgent.name,
               email: newTemporaryAgent.email
            },
            from: {
               name: "ICMBio",
               email: "alcatrazes@icmbio.gov.com"
            },
            subject: "ICMBio - Código de acesso",
            body: "ICMBio"
         }),
   
         this.temporaryAgentRepository.save(newTemporaryAgent)
      ])
   }
}