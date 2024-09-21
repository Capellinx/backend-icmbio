import { CreateCollaboratorDTO } from "../domain/dto/collaborator";

export interface ICollaboratorService {
   create({ name, email, password, createdAt, person_type, cpf, phone }: CreateCollaboratorDTO): Promise<void>
}