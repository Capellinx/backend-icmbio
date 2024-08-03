import { BcryptTemporaryAgent } from "../../interfaces/implementations/bcrypt-temporary-agent";
import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { ResetPasswordTemporaryAgentUseCase } from "./reset-password-temporary-agent";
import { ResetTemporaryAgentPasswordController } from "./reset-password-temporary-agent.controller";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const bcryptTemporaryAgent = new BcryptTemporaryAgent()

const resetPasswordTemporaryAgentUseCase = new ResetPasswordTemporaryAgentUseCase(
   postgresTemporaryAgent,
   bcryptTemporaryAgent
)

const resetPasswordTemporaryAgentController = new ResetTemporaryAgentPasswordController(resetPasswordTemporaryAgentUseCase)

export { resetPasswordTemporaryAgentController }