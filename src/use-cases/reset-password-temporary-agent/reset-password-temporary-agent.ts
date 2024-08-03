
import { ApiError } from '../../config/error/api.error';
import { IResetPasswordTemporaryAgentRequestDTO } from '../../domain/DTOs/temporaryAgent.DTO';
import { IPasswordHash } from '../../interfaces/password.interface';
import { ITemporaryAgentRepository } from './../../repositories/temporaryAgent.repository';

export class ResetPasswordTemporaryAgentUseCase {
   constructor(
      private temporaryAgentRepository: ITemporaryAgentRepository,
      private passwordHash: IPasswordHash
   ) { }

   async execute({ id, password }: IResetPasswordTemporaryAgentRequestDTO): Promise<void> {
      const temporaryAgentExists =  await this.temporaryAgentRepository.findById(id)
      
      if(!temporaryAgentExists){
         throw new ApiError("Temporary agent not found", 404)
      }

      const hashedNewPassword = await this.passwordHash.hashPassword(password)
      
      await this.temporaryAgentRepository.resetPassword(id, hashedNewPassword)
   }
}