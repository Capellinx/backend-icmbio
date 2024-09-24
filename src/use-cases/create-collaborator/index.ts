import { PostgresCollaboratorService } from "../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../services/implementations/bcrypt.service";
import { checkCpfExistUseCase } from "../collaborator/check-cpf-exist";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { CreateCollaboratorController } from "./create-collaborator.controller";

const postgresCollaborator = new PostgresCollaboratorService()

const encryptPasswordService = new BcryptService()

const createCollaboratorUseCase = new CreateCollaboratorUseCase(
   postgresCollaborator,
   encryptPasswordService,
   checkCpfExistUseCase
)

const createCollaboratorController = new CreateCollaboratorController(createCollaboratorUseCase)

export { createCollaboratorController }