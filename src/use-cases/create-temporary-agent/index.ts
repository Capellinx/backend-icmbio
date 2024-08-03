import { BcryptTemporaryAgent } from "../../interfaces/implementations/bcrypt-temporary-agent";
import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { CreateTemporaryAgent } from "./create-temporary-agent";
import { TemporaryAgentController } from "./create-temporary-agent.controller";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const bcryptTemporaryAgent = new BcryptTemporaryAgent()

const createTemporaryAgent = new CreateTemporaryAgent(postgresTemporaryAgent, bcryptTemporaryAgent)

const createTemporaryAgentController = new TemporaryAgentController(createTemporaryAgent)

export { createTemporaryAgentController }