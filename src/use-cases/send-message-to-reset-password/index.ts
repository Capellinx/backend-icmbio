import { EmailMailTrap } from "../../interfaces/implementations/email-mail-trap";
import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { SendMessageToResetPasswordController } from "./send-message-to-reset-password.controller";
import { SendMessageToResetPasswordUseCase } from "./send-messsage-to-reset-password";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const emailMailTrapProvider = new EmailMailTrap()

const sendMessageToResetPassword = new SendMessageToResetPasswordUseCase(
   postgresTemporaryAgent,
   emailMailTrapProvider
)

const sendMessageToResetPasswordController = new SendMessageToResetPasswordController(
   sendMessageToResetPassword
)
export { sendMessageToResetPasswordController }