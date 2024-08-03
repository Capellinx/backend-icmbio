import { IPasswordHash } from "../password.interface";
import bcrypt from 'bcrypt';

export class BcryptTemporaryAgent implements IPasswordHash {
   private static readonly SALT_ROUNDS = 10

   async hashPassword(password: string): Promise<string> {
      return await bcrypt.hash(password, BcryptTemporaryAgent.SALT_ROUNDS)
   }

   async comparePassword(password: string, hash: string): Promise<boolean> {
      return await bcrypt.compare(password, hash)
   }
}