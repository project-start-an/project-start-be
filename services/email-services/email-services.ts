const {
    companyEmail,
    transporter
}=require('./transport.setup')

const sendEmail = async (email:string,mobilePhone: string, description:string)=>{

      const emailRegex = /\S+@\S+\.\S+/;
      const mobilePhoneRegex = /^\+\d{1,15}$/;

      if (!emailRegex.test(email)) {
        throw new Error('Invalid email address');
      }

      if (!mobilePhoneRegex.test(mobilePhone)) {
        throw new Error('Invalid mobile phone number');
    }

      try {
          const mailOptions = {
            from: email,
            to: companyEmail,
            subject: 'New Request Received',
            text: `A new request has been received:\n\nRequestor Email: ${email}\nnRequestor Mobile Phone: ${mobilePhone}\nDescription of the request: ${description}`,
            importance: 'high'
          };

          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent successfully!');

      } catch (error) {
          console.error('Error sending email:', error);
    }
}


export {sendEmail}