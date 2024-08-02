import { TemporaryAgent } from "../../domain/entities/temporaryAgent";
import { ITemporaryAgentRepository } from "../temporaryAgent.repository";
import { prisma } from "../../../prisma/database"

export class PostgresTemporaryAgent implements ITemporaryAgentRepository {
   async save({ name, email, password, thematic_area, role }: TemporaryAgent): Promise<void> {
      await prisma.temporary_agent.create({
         data: {
            name,
            email,
            password,
            thematic_area,
            role
         }
      })
   }

   async findByEmail(email: string): Promise<TemporaryAgent | null> {
      const temporaryAgent = await prisma.temporary_agent.findFirst({
         where: {
            email
         }
      })

      return temporaryAgent ? temporaryAgent : null
   }
}
