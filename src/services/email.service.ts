interface address {
   email: string,
   name: string
}

export interface IMessage {
   to: address
   from: address
   subject: string
   body: string
}

export interface IEmailService {
   sendEmail(message: IMessage): Promise<void>
}