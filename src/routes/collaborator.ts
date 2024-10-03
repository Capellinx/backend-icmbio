import { Router } from "express";
import { createCollaboratorController } from "../use-cases/collaborator/create-collaborator";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCollaboratorSchema } from "../schemas/create-collaborator";
import { loginCollaboratorController } from "../use-cases/collaborator/login";
import { loginCollaboratorSchema } from "../schemas/login-collaborator";
import { approveCollaboratorController } from "../use-cases/collaborator/approve-collaborator";
import { rejectedCollaboratorController } from "../use-cases/collaborator/rejected-collaborator";
import { firstLoginController } from "../use-cases/collaborator/first-login";
import { firstLoginCollaboratorSchema } from "../schemas/first-login-collaborator";
import { forgotPasswordCollaboratorSchema } from "../schemas/forgot-password-collaborator";
import { forgotPasswordController } from "../use-cases/collaborator/forgot-password";
import { getPublicInformationController } from "../use-cases/collaborator/get-public-information";
import { resetPasswordSchemaBody, resetPasswordSchemaParams } from './../schemas/reset-password';
import { resetPasswordController } from "../use-cases/collaborator/reset-password";


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

collaboratorRouter.post(
   "/approve/:id/collaborator",
   async (request, response) => {
      return await approveCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.post(
   "/rejected/:id/collaborator",
   async (request, response) => {
      return await rejectedCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.put(
   "/first-login/:id/collaborator",
   ZodRequestValidate.execute({ body: firstLoginCollaboratorSchema }),
   async (request, response) => {
      return await firstLoginController.handle(request, response)
   }
)

collaboratorRouter.post(
   "/collaborator/forgot-password",
   ZodRequestValidate.execute({ body: forgotPasswordCollaboratorSchema }),
   async (request, response) => {
      return await forgotPasswordController.handle(request, response)
   }
)

collaboratorRouter.get(
   "/collaborator/:publicId",
   async (request, response) => {
      return await getPublicInformationController.handle(request, response)
   }
)

collaboratorRouter.put(
   "/collaborator/:id/reset-password",
   ZodRequestValidate.execute({body: resetPasswordSchemaBody, params: resetPasswordSchemaParams}),
   async (request, response) => {
      return await resetPasswordController.handle(request, response)
   }
)