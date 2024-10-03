import { env } from "../../../env";
import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { IEmailService } from "../../../services/email.service";


export class ForgotPasswordUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private emailService: IEmailService
   ) { }

   async execute(email: string) {
      const collaborator = await this.collaboratorsRepository.findByEmail(email)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      if (!collaborator.public_id) throw new ApiError("Collaborator dont have public id", 400)

      await this.emailService.sendEmail({
         to: {
            name: collaborator.name,
            email: collaborator.email
         },
         from: {
            name: "ICMBio Alcatrazes",
            email: "icmbioalcatrazes@icmbio.gov.br"
         },
         subject: "ICMBio - Recuperação de senha",
         body: `Ola para recuperar sua senha acesse: ${env.BASE_URL}/reset-password/${collaborator.public_id}`
      })

      return
   }
}