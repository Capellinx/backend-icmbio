import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { IEmailService } from "../../../services/email.service";
import { IEncryptionPasswordService } from "../../../services/encryption-password.service";
import { FirstLoginCollaboratorDTO } from "./first-login-dto";


export class FirstLoginUseCase {
   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private emailService: IEmailService,
      private encryptPasswordService: IEncryptionPasswordService
   ) { }

   async execute({ id, password }: FirstLoginCollaboratorDTO): Promise<void> {
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
         subject: "ICMBio - Primeiro acesso",
         body: `Ola ${collaborator.name} sua senha foi alterada com sucesso, agora só acessar o sistema.`
      })

      return
   }
}