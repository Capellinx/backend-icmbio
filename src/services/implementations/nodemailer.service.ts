import Mail from "nodemailer/lib/mailer";
import { IEmailService, IMessage } from "../email.service";
import nodemailer from 'nodemailer'
import { env } from "../../env";


export class NodeMailerService implements IEmailService {
   private transporter: Mail

   constructor() {
      this.transporter = nodemailer.createTransport({
         host: env.EMAIL_HOST,
         port: 2525,
         auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS
         }
      })
   }
   
   async sendEmail(message: IMessage): Promise<void> {
      await this.transporter.sendMail({
         to: {
            name: message.to.name,
            address: message.to.email
         },
         from: {
            name: message.from.name,
            address: message.from.email
         },
         subject: message.subject,
         html: message.body
      })

      return
   }
}
