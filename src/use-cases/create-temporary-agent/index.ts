import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { CreateTemporaryAgent } from "./create-temporary-agent";
import { TemporaryAgentController } from "./create-temporary-agent.controller";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const createTemporaryAgent = new CreateTemporaryAgent(postgresTemporaryAgent)

const createTemporaryAgentController = new TemporaryAgentController(createTemporaryAgent)

export { createTemporaryAgentController }