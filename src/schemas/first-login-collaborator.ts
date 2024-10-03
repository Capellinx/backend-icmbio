import { z } from "zod";

export const firstLoginCollaboratorSchema = z.object({
   password: z.string(),
})
