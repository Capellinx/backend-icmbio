import { PasswordAtuhGuard } from "../../auth/password.auth";
import { ICreateTemporaryAgentRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { TemporaryAgent } from "../../domain/entities/temporaryAgent";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";

export class CreateTemporaryAgent {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository
   ) { }

   async execute({ name, email, password, thematic_area, role }: ICreateTemporaryAgentRequestDTO) {
      const temporaryAgentExists = await this.temporaryAgentRepository.findByEmail(email)

      if (temporaryAgentExists) {
         throw new Error("Temporary agent already exists")
      }
      
      const hashedPassword = await PasswordAtuhGuard.hasPasswrod(password)

      const newTemporaryAgent = new TemporaryAgent(name, email, hashedPassword, thematic_area, role)

      await this.temporaryAgentRepository.save(newTemporaryAgent)
   }
}