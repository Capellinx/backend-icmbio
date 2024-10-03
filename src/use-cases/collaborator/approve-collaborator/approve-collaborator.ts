import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { IEmailService } from "../../../services/email.service";
import { IEncryptionPasswordService } from "../../../services/encryption-password.service";
import randomPassword from "../../../utils/generate-random-password";

export class ApproveCollaboratorUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private emailService: IEmailService,
      private encryptPasswordService: IEncryptionPasswordService
   ) { }

   async execute(collaboratorId: string) {
      const collaborator = await this.collaboratorsRepository.findById(collaboratorId)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      if (collaborator.registration_status === "APPROVED") throw new ApiError("Collaborator already approved", 400)

      const password = randomPassword()

      const hasPassword = await this.encryptPasswordService.encrypt(password)

      const {
         email,
         name
      } = await this.collaboratorsRepository.approveCollaborator(collaboratorId, hasPassword)

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
         body: `Olá ${name} seu cadasro foi aprovado com sucesso sua senha de acesso é: ${password}
         entre no sistema e altere sua senha.`
      })

      return {
         success: true,
         message: "Collaborator approved"
      }
   }
}