import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import nodemailer, {SentMessageInfo} from "nodemailer";
import Mail from "nodemailer/lib/mailer";

@injectable({scope: BindingScope.TRANSIENT})
export class EmailService {
  private transporter;
  constructor(host: string, emailHost: string, password: string) {
    this.transporter = nodemailer.createTransport({
      host: host,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailHost,
        pass: password
      }, logger: true
    })
  }

  /*
   * Add service methods here
   */

  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    const info = await this.transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.response)
    return info
  }

}
