import { ApiError } from "../../config/error/api.error";
import { ISendMessageToResetPasswordRequestDTO } from "../../domain/DTOs/temporaryAgent.DTO";
import { IMailProvider } from "../../interfaces/email.interface";
import { ITemporaryAgentRepository } from "../../repositories/temporaryAgent.repository";

export class SendMessageToResetPasswordUseCase {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository,
      private emailProvider: IMailProvider
   ) { }
   async execute({ email }: ISendMessageToResetPasswordRequestDTO): Promise<void> {
      const temporaryAgentExists = await this.temporaryAgentRepository.findByEmail(email)

      if (!temporaryAgentExists) {
         throw new ApiError("Temporary agent not found", 404)
      }

      await this.emailProvider.sendMail({
         to: {
            name: temporaryAgentExists.name,
            email: temporaryAgentExists.email
         },
         from: {
            name: "ICMBio",
            email: "alcatrazes@icmbio.gov.com"
         },
         subject: "Recuperação de senha",
         body: "Que pena que você perdeu sua senha! entre no link para recuperar ela: http://localhost:3000/reset-password"
      })

   }
}