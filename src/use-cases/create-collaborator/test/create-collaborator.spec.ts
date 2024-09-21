import { it, expect, vi } from "vitest"
import { Collaborator } from "../../../domain/entities/collaborators"
import { ICollaboratorsRepository } from "../../../repositories/collaborators"
import { beforeEach, describe } from "node:test"
import { CreateCollaboratorUseCase } from "../create-collaborator";
import { ApiError } from "../../../error";

const collaboratorsRepository: ICollaboratorsRepository = {
   save: vi.fn(),
   findByEmail: vi.fn()
}

let createCollaboratorUseCase: CreateCollaboratorUseCase

beforeEach(() => {
   createCollaboratorUseCase = new CreateCollaboratorUseCase(collaboratorsRepository)
   vi.clearAllMocks()
})

describe("Create collaborator use case", () => {

   it("should create a collaborator if email does not exist", async () => {
      collaboratorsRepository.findByEmail = vi.fn().mockResolvedValue(null)

      const createCollaboratorUseCase = new CreateCollaboratorUseCase(collaboratorsRepository)

      const newCollaborator = {
         id: crypto.randomUUID(),
         name: "John Doe",
         email: "XU3fD@example.com",
         password: "123456",
         createdAt: new Date(),
         person_type: "Pesquisador(a)",
         cpf: "12345678901",
         phone: "123456789"
      }

      await createCollaboratorUseCase.execute(newCollaborator)

      expect(collaboratorsRepository.save).toHaveBeenCalled()
   })
})