import { Collaborator } from "../../../domain/entities/collaborators";
import { ApiError } from "../../../error";
import { ICollaboratorsRepository } from "../../../repositories/collaborators";
import { removeCaracteres } from "../../../utils/remove-caracteres";
import { CheckCpfExistUseCase } from "../check-cpf-exist/check-cpf-exist";
import { CreateCollaboratorDTO } from "./create-collaborator-dto";
import { IEmailService } from "../../../services/email.service";
import randomPassword from "../../../utils/generate-random-password";
import { IEncryptionPasswordService } from "../../../services/encryption-password.service";
import crypto from "crypto";
import { PersonType } from "@prisma/client";
import { createTemplate } from "../../../utils/email-template";
export class CreateCollaboratorUseCase {

   constructor(
      private collaboratorsRepository: ICollaboratorsRepository,
      private emailService: IEmailService,
      private encryptPasswordService: IEncryptionPasswordService
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<CreateCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorsRepository.findByEmail(payload.email)
      
      if (collaborator) throw new ApiError("Collaborator already exists", 400)

      const password = await this.encryptPasswordService.encrypt(randomPassword())

      const usCollaborator = ["ATA", "ANALISTA"]

      if(usCollaborator.includes(payload.person_type)) {
         const newCollaborator = new Collaborator({
            name: payload.name,
            email: payload.email,
            password,
            person_type: payload.person_type,
            cpf: removeCaracteres(payload.cpf!),
            phone: removeCaracteres(payload.phone),
            role: payload.person_type === "ANALISTA" ? "ANALISTA" : "ATA",
            matricula: payload.matricula,
            createdAt: new Date(),
            updatedAt: new Date()
         });

         await this.collaboratorsRepository.save(newCollaborator)

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

         return {
            success: false,
            id: newCollaborator.id
         }
      }

      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         password,
         person_type: payload.person_type,
         cpf: removeCaracteres(payload.cpf!),
         phone: removeCaracteres(payload.phone),
         matricula: null!,
         role: payload.person_type === "CONDUTOR" ? "CONDUTOR" : "PESQUISADOR",
         createdAt: new Date(),
         updatedAt: new Date()
      });

      await this.collaboratorsRepository.save({
         ...newCollaborator,
      })

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
         body: createTemplate(payload.name),

      })

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