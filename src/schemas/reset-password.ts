import { z } from "zod";

export const resetPasswordSchemaBody = z.object({
   password: z.string()
})

export const resetPasswordSchemaParams = z.object({
   id: z.string()
})

