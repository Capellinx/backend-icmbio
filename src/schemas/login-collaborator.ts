import { z } from "zod";


export const loginCollaboratorSchema = z.object({
   email: z.string().email(),
   password: z.string(),
})