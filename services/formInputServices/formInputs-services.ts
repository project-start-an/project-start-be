import { InputType } from "./formInputs-types";
import * as nodemailer from "nodemailer";

//types import
const {
    InputType
} =require('./formInputs-types')


  const InputData: Array<typeof InputType> = [
    { 
        email: "newemail@gmail.com", 
        mobilePhone: '+47266628393',
        description: "I want a simple website to showcase my products" 
    },
    { 
        email: "sthing@gmail.com",
        mobilePhone: '+47266628393',
        description: 'I will need your further help with deciding what I need' 
    },
  ];


  const getAllInputData = () =>{
    return InputData;
  }
  
  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: 'project.start.an@gmail.com',
        pass: 'eybhbzswksgqsmqq',
      },
  });
  


  //Here is the endpoint for adding a new input to the local array InputData
  const addNewInput = async (email: string, mobilePhone: string, description: string)=>{
    const newInput: typeof InputType = {
      email,
      mobilePhone,
      description,
    };
  
    InputData.push(newInput);
    console.log(InputData)

    // Send email
        try {
          const mailOptions = {
            from: email,
            to: "chernaevangel@gmail.com",
            subject: 'New Input Received',
            text: `A new input has been received:\n\nEmail: ${email}\nMobile Phone: ${mobilePhone}\nDescription: ${description}`,
          };

          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.messageId);
        } catch (error) {
          console.error('Error sending email:', error);
  }
  }



export { getAllInputData, addNewInput};