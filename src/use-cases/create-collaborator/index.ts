import { PostgresCollaboratorService } from "../../repositories/implementations/postgres-collaborator";
import { NodeMailerService } from "../../services/implementations/nodemailer.service";
import { checkCpfExistUseCase } from "../collaborator/check-cpf-exist";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { CreateCollaboratorController } from "./create-collaborator.controller";

const postgresCollaborator = new PostgresCollaboratorService()

const nodemailerService = new NodeMailerService()

const createCollaboratorUseCase = new CreateCollaboratorUseCase(
   postgresCollaborator,
   checkCpfExistUseCase,
   nodemailerService
)

const createCollaboratorController = new CreateCollaboratorController(createCollaboratorUseCase)

export { createCollaboratorController }