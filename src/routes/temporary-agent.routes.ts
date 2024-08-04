import { Router } from "express";
import { sendMessageToResetPasswordController } from "../use-cases/send-message-to-reset-password";
import { resetPasswordTemporaryAgentController } from "../use-cases/reset-password-temporary-agent";
import { updateInfoTemporaryAgentController } from "../use-cases/update-info-temporary-agent";
import { createTemporaryAgentController } from "../use-cases/create-temporary-agent";
import { loginTemporaryAgentController } from "../use-cases/login-temporary-agent";
import { ValidateBody } from "../middlewares/validate-body.middleware";
import {
   loginTemporaryAgentSchema,
   registerTemporaryAgentSchema,
   resetPasswordTemporaryAgentSchema,
   sendMessageToResetPasswordSchema,
} from "../schemas/temporary-agent.schema";

export const temporaryAgentRouter = Router()

temporaryAgentRouter.post("/register",
   ValidateBody.execute({ body: registerTemporaryAgentSchema }),
   async (request, response) => {
      return createTemporaryAgentController.handle(request, response)
   }
)

temporaryAgentRouter.post("/login",
   ValidateBody.execute({ body: loginTemporaryAgentSchema }),
   async (request, response) => {
      return loginTemporaryAgentController.handle(request, response)
   }
)

temporaryAgentRouter.post("/send-email",
   ValidateBody.execute({ body: sendMessageToResetPasswordSchema }), async (request, response) => {
      return sendMessageToResetPasswordController.handle(request, response)
   }
)

temporaryAgentRouter.put("/reset-password/:id",
   ValidateBody.execute({ body: resetPasswordTemporaryAgentSchema }),
   async (request, response) => {
      return resetPasswordTemporaryAgentController.handle(request, response)
   }
)

temporaryAgentRouter.put("/update-info/:id", async (request, response) => {
   return updateInfoTemporaryAgentController.handle(request, response)
})