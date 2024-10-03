import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../../services/implementations/bcrypt.service";
import { NodeMailerService } from "../../../services/implementations/nodemailer.service";
import { FirstLoginUseCase } from "./first-login";
import { FirstLoginController } from "./first-login.controller";

const postgresCollaboratorService = new PostgresCollaboratorService();

const nodemailerService = new NodeMailerService();

const bcryptService = new BcryptService();

const firstLoginUseCase = new FirstLoginUseCase(
   postgresCollaboratorService,
   nodemailerService,
   bcryptService
);

const firstLoginController = new FirstLoginController(firstLoginUseCase);

export { firstLoginController }