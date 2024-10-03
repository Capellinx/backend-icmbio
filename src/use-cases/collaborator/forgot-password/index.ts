import { PostgresCollaboratorService } from "../../../repositories/implementations/postgres-collaborator"
import { NodeMailerService } from "../../../services/implementations/nodemailer.service"
import { FirstLoginUseCase } from "../first-login/first-login"
import { ForgotPasswordUseCase } from "./forgot-password"
import { ForgotPasswordController } from "./forgot-password.controller"

const postgresCollaborator = new PostgresCollaboratorService()

const nodemailerService = new NodeMailerService()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
   postgresCollaborator,
   nodemailerService
)

const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase)

export { forgotPasswordController }