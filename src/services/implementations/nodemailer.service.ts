import Mail from "nodemailer/lib/mailer";
import { IEmailService, IMessage } from "../email.service";
import nodemailer from 'nodemailer'
import { env } from "../../env";
import path from "path";


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

   async sendEmail({ body, to, from, subject }: IMessage): Promise<void> {
      await this.transporter.sendMail({
         to: {
            name: to.name,
            address: to.email
         },
         from: {
            name: from.name,
            address: from.email
         },
         subject: subject,
         html: body,
         attachments: [{
            filename: 'logo.png',
            path: path.join(__dirname, '../../../public/logo.png'),
            cid: 'logo'
         }]
      })

      return
   }
}
