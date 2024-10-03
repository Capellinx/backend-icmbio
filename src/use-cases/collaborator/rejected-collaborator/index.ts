import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator"
import { NodeMailerService } from "../../../services/implementations/nodemailer.service"
import { RejectedCollaboratorUseCase } from "./rejected-collaborator"
import { RejectedCollaboratorController } from "./rejected-collaborator.controller"

const postgresCollaboratorService = new PostgresCollaboratorService()

const nodemailerService = new NodeMailerService()

const rejectedCollaboratorUseCase = new RejectedCollaboratorUseCase(
   postgresCollaboratorService,
   nodemailerService
)

const rejectedCollaboratorController = new RejectedCollaboratorController(
   rejectedCollaboratorUseCase
)

export { rejectedCollaboratorController }