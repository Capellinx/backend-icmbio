
import { PostgresCollaboratorService } from '../../../repositories/implementations/postgres-collaborator';
import { CheckCpfExistUseCase } from './check-cpf-exist';
import { CheckCpfController } from './check-cpf-exist.controller';

const postgresCollaborator = new PostgresCollaboratorService()

const checkCpfExistUseCase = new CheckCpfExistUseCase(postgresCollaborator)

const checkCpfController = new CheckCpfController(checkCpfExistUseCase)

export { checkCpfController, checkCpfExistUseCase }