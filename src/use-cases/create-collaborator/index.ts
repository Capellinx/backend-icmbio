import { PostgresCollaboratorService } from "../../repositories/implementations/postgres-collaborator";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { CreateCollaboratorController } from "./create-collaborator.controller";

const postgresCollaborator = new PostgresCollaboratorService()

const createCollaboratorUseCase = new CreateCollaboratorUseCase(postgresCollaborator)

const createCollaboratorController = new CreateCollaboratorController(createCollaboratorUseCase)

export { createCollaboratorController }