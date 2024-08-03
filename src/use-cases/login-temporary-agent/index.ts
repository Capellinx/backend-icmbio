import { BcryptTemporaryAgent } from "../../interfaces/implementations/bcrypt-temporary-agent";
import { JsonWebTokenTemporaryAgent } from "../../interfaces/implementations/jsonwebtoken-temporary-agent";
import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { LoginTemporaryAgentUseCase } from "./login-temporary-agent";
import { LoginTemporaryAgentController } from "./login-temporary-agent.controller";

const postgreTemporaryAgent = new PostgresTemporaryAgent()

const bcryptTemporaryAgent = new BcryptTemporaryAgent()

const jsonWebTokenTemporaryAgent = new JsonWebTokenTemporaryAgent()

const loginTemporaryAgentUseCase = new LoginTemporaryAgentUseCase(
   postgreTemporaryAgent,
   bcryptTemporaryAgent,
   jsonWebTokenTemporaryAgent
)

const loginTemporaryAgentController = new LoginTemporaryAgentController(loginTemporaryAgentUseCase)

export { loginTemporaryAgentController }