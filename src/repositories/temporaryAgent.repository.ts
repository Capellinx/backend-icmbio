import { TemporaryAgent } from "../domain/entities/temporaryAgent"

export interface ITemporaryAgentRepository {
   save: (temporaryAgent: TemporaryAgent) => Promise<void>
   findByEmail: (email: string) => Promise<TemporaryAgent | null>
   login: (email: string, password: string) => Promise<TemporaryAgent | null>
   resetPassword: (id: string, password: string) => Promise<void>
   findById: (id: string) => Promise<TemporaryAgent | null>
}