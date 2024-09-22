import { PersonType } from "@prisma/client";
import { z } from "zod";


export const createCollaboratorSchema = z.object({
   id: z.string(),
   name: z.string(),
   email: z.string(),
   password: z.string(),
   person_type: z.nativeEnum(PersonType),
   cpf: z.string(),
   phone: z.string(),
}).omit({
   id: true
})