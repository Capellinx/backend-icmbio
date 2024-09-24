
import { PostgresCollaboratorService } from '../../../repositories/implementations/postgres-collaborator';
import { CheckCpfExistUseCase } from './check-cpf-exist';

const postgresCollaborator = new PostgresCollaboratorService()

const checkCpfExistUseCase = new CheckCpfExistUseCase(postgresCollaborator)

export { checkCpfExistUseCase }