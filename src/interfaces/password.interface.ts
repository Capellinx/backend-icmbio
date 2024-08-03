
export interface IPasswordHash {
   hashPassword(password: string): Promise<string>
   comparePassword(password: string, hash: string): Promise<boolean>
}