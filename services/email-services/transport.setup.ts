import * as nodemailer from "nodemailer";

const companyEmail: string = "project.start.an@gmail.com";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
});

export {companyEmail,transporter}