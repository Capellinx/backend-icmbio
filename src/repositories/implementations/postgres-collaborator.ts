import { Collaborator } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { CreateCollaboratorDTO } from "../../domain/dto/collaborator";
import { ApiError } from "../../error";
import { ICollaboratorsRepository } from "../collaborators";


export class PostgresCollaboratorService implements ICollaboratorsRepository {
   async findByEmail(email: string): Promise<void> {
      const collaborator = await prisma.collaborator.findUnique({
         where: {
            email,
         }
      })

      if (collaborator) throw new ApiError("Collaborator already exists", 400)
   }

   async save({ name, email, password, person_type, cpf, phone, createdAt, role, updatedAt }: Collaborator): Promise<void> {
      await prisma.collaborator.create({
         data: {
            name,
            email,
            password,
            person_type,
            cpf,
            phone,
            createdAt,
            role,
            updatedAt
         }
      })
   }
}