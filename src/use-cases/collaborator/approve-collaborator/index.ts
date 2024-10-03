import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../../services/implementations/bcrypt.service";
import { NodeMailerService } from "../../../services/implementations/nodemailer.service";
import { ApproveCollaboratorUseCase } from "./approve-collaborator";
import { ApproveCollaboratorController } from "./approve-collaborator.controller";

const postgresCollaboratorService = new PostgresCollaboratorService()

const nodeMailerService = new NodeMailerService()

const bcryptService = new BcryptService()

const approveCollaboratorUseCase = new ApproveCollaboratorUseCase(
   postgresCollaboratorService,
   nodeMailerService,
   bcryptService
)

const approveCollaboratorController = new ApproveCollaboratorController(
   approveCollaboratorUseCase
)

export { approveCollaboratorController }