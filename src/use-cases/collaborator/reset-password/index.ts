import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator";
import { BcryptService } from "../../../services/implementations/bcrypt.service";
import { NodeMailerService } from "../../../services/implementations/nodemailer.service";
import { ResetPasswordUseCase } from "./reset-password";
import { ResetPasswordController } from "./reset-password.controller";

const postgresCollaboratorService = new PostgresCollaboratorService()

const nodemailerService = new NodeMailerService()

const bcryptService = new BcryptService()

const resetPasswordUseCase = new ResetPasswordUseCase(
   postgresCollaboratorService,
   bcryptService,
   nodemailerService
)

const resetPasswordController = new ResetPasswordController(resetPasswordUseCase)

export { resetPasswordController }
