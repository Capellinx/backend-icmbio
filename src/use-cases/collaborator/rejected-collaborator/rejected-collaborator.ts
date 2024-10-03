import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { IEmailService } from "../../../services/email.service";


export class RejectedCollaboratorUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private emailService: IEmailService
   ) { }

   async execute(collaboratorId: string) {
      const collaborator = await this.collaboratorsRepository.findById(collaboratorId)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      if (collaborator.registration_status === "REJECTED") throw new ApiError("Collaborator already rejected", 400)

      await this.collaboratorsRepository.rejectCollaborator(collaboratorId)

      await this.emailService.sendEmail({
         to: {
            name: collaborator.name,
            email: collaborator.email
         },
         from: {
            name: "ICMBio Alcatrazes",
            email: "icmbioalcatrazes@icmbio.gov.br"
         },
         subject: "ICMBio - Aprovação de colaborador",
         body: `Olá ${collaborator.name} seu cadasro foi reprovado por favor entre em contato com o suporte.`
      })

      return {
         success: true,
         message: "Collaborator rejected"
      }
   }

}