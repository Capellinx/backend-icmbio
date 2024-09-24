export interface IToken {
   generateToken(payload: Record<string, any>): Promise<string>
   refreshToken(id: number): Promise<string>
}