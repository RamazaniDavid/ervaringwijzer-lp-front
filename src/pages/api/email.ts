// import { SMTPClient } from 'emailjs';
import { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

require('dotenv').config();

const send = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, lastName, duty, email } = req.body.data;

    const transporter = nodemailer.createTransport({
      port: Number(process.env.EMAIL_PORT),
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: process.env.EMAIL_SSL === 'true',
    });

    // const client = new SMTPClient({
    //   user: process.env.EMAIL_USER,
    //   password: process.env.EMAIL_PASSWORD,
    //   host: process.env.EMAIL_HOST,
    //   ssl: process.env.EMAIL_SSL === 'true',
    // });

    transporter.sendMail(
      {
        text: `Hallo Ward,

        De heer/mevrouw ${firstName} ${lastName}, die als ${duty} werkt, wil graag ons product proberen.
        Hun e-mailadres: ${email}

        Vriendelijke groeten
        Ervaringwijzer mailer`,
        subject: `De heer/mevrouw ${firstName} ${lastName}, die als ${duty} werkt, heeft een e-mail gestuurd via onze site.`,
        from: email ?? 'ervaringwijzer@gmail.com',
        to: process.env.EMAIL_RECEIVER ?? 'ervaringwijzer@gmail.com',
      },
      (err, message) => {
        if (err) {
          console.log(err);

          res.status(500).json({ message: err.toString() });
        } else {
          console.log(message);

          res.status(200).json({ message: message.toString() });
        }
      }
    );
  } catch (err: any) {
    console.log(err);

    res.status(500).json({ message: err.toString() });
  }
};

export default send;
