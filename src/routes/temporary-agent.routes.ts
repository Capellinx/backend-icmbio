import { Router } from "express";
import { createTemporaryAgentController } from "../use-cases/create-temporary-agent";
import { loginTemporaryAgentController } from "../use-cases/login-temporary-agent";
import { loginTemporaryAgentSchema, registerTemporaryAgentSchema } from "../schemas/temporary-agent.schema";
import { ValidateBody } from "../middlewares/validate-body.middleware";

export const temporaryAgentRouter = Router()

temporaryAgentRouter.post("/register",
   ValidateBody.execute({body: registerTemporaryAgentSchema}),
   async (request, response) => {
      return createTemporaryAgentController.handle(request, response)
   }
)

temporaryAgentRouter.post("/login",
   ValidateBody.execute({body: loginTemporaryAgentSchema}),
   async (request, response) => {
      return loginTemporaryAgentController.handle(request, response)
   }
)