import { Router } from "express";
import { createTemporaryAgentController } from "../use-cases/create-temporary-agent";
import { loginTemporaryAgentController } from "../use-cases/login-temporary-agent";

export const temporaryAgentRouter = Router()

temporaryAgentRouter.post("/register", async (request, response) => {
   return createTemporaryAgentController.handle(request, response)
})

temporaryAgentRouter.post("/login", async (request, response) => {
   return loginTemporaryAgentController.handle(request, response)
})