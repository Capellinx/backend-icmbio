import { IEncryptionPasswordService } from "../encryption-password.service";
import bcrypt from "bcrypt";

export class BcryptService implements IEncryptionPasswordService {
   public static readonly saltsRounds = 10

   async encrypt(password: string): Promise<string> {
      console.log(password);
      return await bcrypt.hash(password, BcryptService.saltsRounds)
   }

   async compare(password: string, hash: string): Promise<boolean> {
      return await bcrypt.compare(password, hash)
   }
}
