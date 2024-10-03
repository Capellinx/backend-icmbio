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

   async save({ name, email, password, person_type, cpf, phone, createdAt, role, updatedAt, public_id }: Collaborator): Promise<void> {
      await prisma.collaborator.create({
         data: {
            name,
            email,
            password,
            person_type,
            cpf,
            phone,
            role,
            public_id,
            createdAt,
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

   async findById(id: string): Promise<ICollaboratorsRepository.FindByIdOutput | null> {
      const collaborator = await prisma.collaborator.findUnique({
         where: {
            id
         },
         select: {
            id: true,
            phone: true,
            email: true,
            name: true,
            person_type: true,
            registration_status: true
         }
      })

      if (!collaborator) return null

      return collaborator
   }

   async approveCollaborator(id: string, password: string): Promise<ICollaboratorsRepository.ApproveCollaboratorOutput> {
      const collaborator = await prisma.collaborator.update({
         where: {
            id
         },
         data: {
            password,
            registration_status: "APPROVED"
         }
      })

      return {
         name: collaborator.name,
         email: collaborator.email,
      }
   }

   async rejectCollaborator(id: string): Promise<void> {
      await prisma.collaborator.update({
         where: {
            id
         },
         data: {
            registration_status: "REJECTED"
         }
      })

      return
   }

   async updatePassword(id: string, password: string): Promise<void> {
      await prisma.collaborator.update({
         where: {
            id
         },
         data: {
            first_login: false,
            password
         }
      })

      return
   }

   async findPublicId(id: string): Promise<ICollaboratorsRepository.FindPublicIdOutput | null> {
      const collaborator = await prisma.collaborator.findFirst({
         where: {
            public_id: id
         },
         select: {
            email: true,
            name: true,
            phone: true,
            person_type: true,
         }
      })

      if(!collaborator) return null

      return collaborator
   }
}