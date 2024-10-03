import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { IEmailService } from "../../../services/email.service";
import { IEncryptionPasswordService } from "../../../services/encryption-password.service";


export class ResetPasswordUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private encryptPasswordService: IEncryptionPasswordService,
      private emailService: IEmailService
   ) { }

   async execute(id: string, password: string) {
      const collaborator = await this.collaboratorsRepository.findById(id)

      if (!collaborator) throw new ApiError("Collaborator not found", 404)

      const encryptPass = await this.encryptPasswordService.encrypt(password)

      await this.collaboratorsRepository.updatePassword(id, encryptPass)

      await this.emailService.sendEmail({
         to: {
            name: collaborator.name,
            email: collaborator.email
         },
         from: {
            name: "ICMBio Alcatrazes",
            email: "icmbioalcatrazes@icmbio.gov.br"
         },
         subject: "ICMBio - Alteração de senha",
         body: `Ola ${collaborator.name} sua senha foi alterada com sucesso! Que bom ter você de volta no ecossistema digital!.`
      })

      return
   }
}