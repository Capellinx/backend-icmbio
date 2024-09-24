import { Collaborator } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { ICollaboratorsRepository } from "../collaborators";


export class PostgresCollaboratorService implements ICollaboratorsRepository {
   async findByEmail(email: string): Promise<Collaborator | null> {
      const collaborator = await prisma.collaborator.findUnique({
         where: {
            email,
         }
      })


      return collaborator ? collaborator : null
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

   async existCpf(cpf: string): Promise<boolean> {
      const collaborator = await prisma.collaborator.findFirst({
         where: {
            cpf
         }
      })


      return collaborator ? true : false
   }
}