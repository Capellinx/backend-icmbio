import { PostgresTemporaryAgent } from "../../repositories/implementations/postgres-temporary-agent";
import { UpdateInfoTemporaryAgentUseCase } from "./update-info-temporary-agent";
import { UpdateInfoTemporaryAgentController } from "./update-info-temporary-agent.controller";

const postgresTemporaryAgent = new PostgresTemporaryAgent()

const updateInfoTemporaryAgentUseCase = new UpdateInfoTemporaryAgentUseCase(postgresTemporaryAgent)

const updateInfoTemporaryAgentController = new UpdateInfoTemporaryAgentController(
   updateInfoTemporaryAgentUseCase
)

export { updateInfoTemporaryAgentController }