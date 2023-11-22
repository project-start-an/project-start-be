import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: 'project.start.an@gmail.com',
      pass: 'eybhbzswksgqsmqq',
    },
});

export {transporter}