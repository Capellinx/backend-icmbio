import { Collaborator } from "../../../domain/entities/collaborators";
import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { removeCaracteres } from "../../../utils/remove-caracteres";
import { CheckCpfExistUseCase } from "../check-cpf-exist/check-cpf-exist";
import { CreateCollaboratorDTO } from "./create-collaborator-dto";
import { IEmailService } from "../../../services/email.service";
export class CreateCollaboratorUseCase {

   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private checkCpfExistUseCase: CheckCpfExistUseCase,
      private emailService: IEmailService,
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<CreateCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorsRepository.findByEmail(payload.email)
      
      await this.checkCpfExistUseCase.execute(removeCaracteres(payload.cpf))

      const randomPassword = Math.random().toString(36).slice(-16)

      if (collaborator) throw new ApiError("Collaborator already exists", 400)

      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         password: randomPassword,
         person_type: payload.person_type,
         cpf: removeCaracteres(payload.cpf),
         phone: removeCaracteres(payload.phone),
         role: payload.role!,
         createdAt: new Date(),
         updatedAt: new Date()
      });

      await this.emailService.sendEmail({
         to: {
            name: payload.name,
            email: payload.email
         },
         from: {
            name: "ICMBio Alcatrazes",
            email: "icmbioalcatrazes@icmbio.gov.br"
         },
         subject: "Usuário cadastrasdo - aguardando aprovação",
         body: `Parabéns Usuário	cadastrado! aguardar aprovação.`
      })

      await this.collaboratorsRepository.save(newCollaborator)

      return {
         success: true,
         id: newCollaborator.id
      }
   }
}

export namespace CreateCollaboratorUseCase {
   export type Output = {
      success: boolean
      id?: string
   }
}