const {
    transporter
}=require('./transport.setup')

const sendEmail = async (email:string,mobilePhone: string, description:string)=>{

      try {
        const mailOptions = {
          from: email,
          to: "project.start.an@gmail.com",
          subject: 'New Input Received',
          text: `A new input has been received:\n\nEmail: ${email}\nMobile Phone: ${mobilePhone}\nDescription: ${description}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
      } catch (error) {
          console.error('Error sending email:', error);
    }
}


export {sendEmail}