import { IMailProvider, IMassage } from "../email.interface";
import Mail from "nodemailer/lib/mailer"
import nodemailer from "nodemailer"

export class EmailMailTrap implements IMailProvider {
   private transporter: Mail

   constructor() {
      this.transporter = nodemailer.createTransport({
         host: "sandbox.smtp.mailtrap.io",
         port: 2525,
         auth: {
            user: "7648192e140a87",
            pass: "ca3f856f119287"
         }
      })
   }

   async sendMail(message: IMassage): Promise<void> {
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
   }
}
