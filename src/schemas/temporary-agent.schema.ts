import { z } from "zod";

export const registerTemporaryAgentSchema = z.object({
   id: z.number().int().min(1),
   name: z.string(),
   email: z.string().email().min(1),
   password: z.string().min(1),
   thematic_area: z.string().min(1),
   role: z.number().int().min(1)
})

export const loginTemporaryAgentSchema = z.object({
   email: z.string().email().min(1),
   password: z.string().min(1),
})

export const registerSchema = registerTemporaryAgentSchema.omit({ id: true })
