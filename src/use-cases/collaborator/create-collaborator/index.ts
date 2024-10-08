import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../../services/implementations/bcrypt.service";
import { NodeMailerService } from "../../../services/implementations/nodemailer.service";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { CreateCollaboratorController } from "./create-collaborator.controller";

const postgresCollaborator = new PostgresCollaboratorService()

const nodemailerService = new NodeMailerService()

const bcryptService = new BcryptService()

const createCollaboratorUseCase = new CreateCollaboratorUseCase(
   postgresCollaborator,
   nodemailerService,
   bcryptService
)

const createCollaboratorController = new CreateCollaboratorController(createCollaboratorUseCase)

export { createCollaboratorController }