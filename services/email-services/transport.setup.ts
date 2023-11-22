import * as nodemailer from "nodemailer";

const companyEmail: string = "project.start.an@gmail.com";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: 'project.start.an@gmail.com',
      pass: 'eybhbzswksgqsmqq',
    },
});

export {companyEmail,transporter}