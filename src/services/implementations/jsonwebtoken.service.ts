import Jwt from "jsonwebtoken";
import { env } from "../../env";
import { IToken } from "../token.service";

export class JsonWebTokenService implements IToken {
   async generateToken(payload: Record<string, any>): Promise<string> {
      const accessToken = Jwt.sign(payload, env.JWT_SECRET, { expiresIn: '8h' })
      return accessToken
   }

   async refreshToken(id: number): Promise<string> {
      const refreshToken = Jwt.sign({ id }, env.JWT_REFRESH_SECRET, { expiresIn: '2d' })
      return refreshToken
   }
}