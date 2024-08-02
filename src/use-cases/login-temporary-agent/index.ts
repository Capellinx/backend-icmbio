import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { LoginTemporaryAgentUseCase } from "./login-temporary-agent";
import { LoginTemporaryAgentController } from "./login-temporary-agent.controller";

const postgreTemporaryAgent = new PostgresTemporaryAgent()

const loginTemporaryAgentUseCase = new LoginTemporaryAgentUseCase(postgreTemporaryAgent)

const loginTemporaryAgentController = new LoginTemporaryAgentController(loginTemporaryAgentUseCase)

export { loginTemporaryAgentController }