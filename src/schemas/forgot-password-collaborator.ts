import { z } from "zod";


export const forgotPasswordCollaboratorSchema = z.object({
   email: z.string().email(),
})