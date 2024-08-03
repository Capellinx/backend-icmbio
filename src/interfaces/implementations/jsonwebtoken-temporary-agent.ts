import { IToken } from "../token.interface";
import { env } from "../../env";
import Jwt from "jsonwebtoken"

export class JsonWebTokenTemporaryAgent implements IToken {
   async generateToken(id: string): Promise<string> {
      const accessToken = Jwt.sign({ id }, env.JWT_SECRET, { expiresIn: '1hr' })
      return accessToken
   }

   async refreshToken(id: string): Promise<string> {
      const accessToken = Jwt.sign({ id }, env.JWT_SECRET, { expiresIn: '7d' })
      return accessToken
   }
}