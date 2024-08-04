export interface ICreateTemporaryAgentRequestDTO {
   name: string
   email: string
   password: string
   thematic_area: string
   role: number
}
export interface ILoginTemporaryAgentRequestDTO {
   email: string
   password: string
}
export interface ISendMessageToResetPasswordRequestDTO {
   email: string
}
export interface IResetPasswordTemporaryAgentRequestDTO {
   id: string
   password: string
}

export interface IUpdateTemporaryAgentRequestDTO {
   id: string
   name?: string
   email?: string
   password?: string
   thematic_area?: string
   role?: number
}