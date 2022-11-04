import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import nodemailer, {SentMessageInfo} from "nodemailer";
import Mail from "nodemailer/lib/mailer";

@injectable({scope: BindingScope.TRANSIENT})
export class EmailService {
  private transporter;
  private emailHost;
  constructor(emailHost: string, password: string) {

    this.emailHost = emailHost;
    this.transporter = nodemailer.createTransport({
      /* host: host,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailHost,
        pass: password
      }, logger: true
    }) */
      service: 'gmail',

      auth: {
        user: emailHost,
        pass: password,
      },
      logger: true
    })
  }

  /*
   * Add service methods here
   */

  /*  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
     const info = await this.transporter.sendMail(mailOptions)
     console.log("Message sent: %s", info.response)
     return info
   } */
  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    mailOptions.from = this.emailHost;
    const info = await this.transporter.sendMail(mailOptions);
    console.log("Messsage sent: %s", info.response);
    return info;

  }
}
