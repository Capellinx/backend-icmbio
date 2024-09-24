import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../../services/implementations/bcrypt.service";
import { JsonWebTokenService } from "../../../services/implementations/jsonwebtoken.service";
import { LoginCollaboratorUseCase } from "./login-collaborator";
import { LoginController } from "./login-collaborator.controller";

const postgresCollaborator = new PostgresCollaboratorService()

const bcryptService = new BcryptService()

const jsonWebTokenService = new JsonWebTokenService()

const loginCollaboratorUseCase = new LoginCollaboratorUseCase(
   postgresCollaborator,
   bcryptService,
   jsonWebTokenService
)

const loginCollaboratorController = new LoginController(loginCollaboratorUseCase)


export { loginCollaboratorController }