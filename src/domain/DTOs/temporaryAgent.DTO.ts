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