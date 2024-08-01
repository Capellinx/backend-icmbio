import { Router } from "express";
import { createTemporaryAgentController } from "../use-cases/create-temporary-agent";


export const temporaryAgentRouter = Router()

temporaryAgentRouter.post("/", async (request, response) => {
   return createTemporaryAgentController.handle(request, response)
})