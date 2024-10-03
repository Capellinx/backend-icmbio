import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { GetPublicInformationUseCase } from "./get-public-information";
import { GetPublicInformationController } from "./get-public-information.controller";

const postgresCollaboratorService = new PostgresCollaboratorService()

const getPublicInformationUseCase = new GetPublicInformationUseCase(
   postgresCollaboratorService
)

const getPublicInformationController = new GetPublicInformationController(
   getPublicInformationUseCase
)

export { getPublicInformationController }
