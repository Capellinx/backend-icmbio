import { PersonType, Role } from "@prisma/client";
import { z } from "zod";


export const createCollaboratorSchema = z.object({
   id: z.string(),
   name: z.string(),
   email: z.string(),
   person_type: z.nativeEnum(PersonType),
   cpf: z.string().optional(),
   phone: z.string(),
   matricula: z.string().optional(),
   role: z.nativeEnum(Role).optional().default(Role.USER)
}).omit({
   id: true
})