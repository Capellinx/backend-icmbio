import { BcryptTemporaryAgent } from "../../interfaces/implementations/bcrypt-temporary-agent";
import { EmailMailTrap } from "../../interfaces/implementations/email-mail-trap";
import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { CreateTemporaryAgent } from "./create-temporary-agent";
import { TemporaryAgentController } from "./create-temporary-agent.controller";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const bcryptTemporaryAgent = new BcryptTemporaryAgent()

const emailMailTrapProvider = new EmailMailTrap()

const createTemporaryAgent = new CreateTemporaryAgent(
   postgresTemporaryAgent,
   bcryptTemporaryAgent,
   emailMailTrapProvider
)

const createTemporaryAgentController = new TemporaryAgentController(createTemporaryAgent)

export { createTemporaryAgentController }