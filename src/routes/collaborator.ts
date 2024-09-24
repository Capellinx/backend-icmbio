import { Router } from "express";
import { createCollaboratorController } from "../use-cases/create-collaborator";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCollaboratorSchema } from "../schemas/create-collaborator";
import { loginCollaboratorController } from "../use-cases/collaborator/login";
import { loginCollaboratorSchema } from "../schemas/login-collaborator";


export const collaboratorRouter = Router()

collaboratorRouter.post(
   "/collaborator",
   ZodRequestValidate.execute({ body: createCollaboratorSchema }),
   async (request, response) => {
      return await createCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.post(
   "/login",
   ZodRequestValidate.execute({ body: loginCollaboratorSchema }),
   async (request, response) => {
      return await loginCollaboratorController.handle(request, response)
   }
)