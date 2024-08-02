import { env } from "../env"
import Jwt from "jsonwebtoken"

export class TokenAuthGuard {
   static async generateToken(id: string): Promise<string> {
      const accessToken = Jwt.sign({ id }, env.JWT_SECRET, { expiresIn: '1hr' })
      return accessToken
   }
   static async refreshToken(id: string): Promise<string> {
      const accessToken = Jwt.sign({ id }, env.JWT_SECRET, { expiresIn: '7d' })
      return accessToken
   }
}