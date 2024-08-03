export interface IToken {
   generateToken(id: string): Promise<string>
   refreshToken(id: string): Promise<string> 
   // verifyToken(token: string): Promise<any>
}