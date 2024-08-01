import bcrypt from "bcrypt"

export class PasswordAtuhGuard {
   private static readonly SALT_ROUNDS = 10

   static async hasPasswrod(password: string): Promise<string> {
      return await bcrypt.hash(password, PasswordAtuhGuard.SALT_ROUNDS)
   }

   static async comparePassword(password: string, hash: string): Promise<boolean> {
      return await bcrypt.compare(password, hash)
   }
}