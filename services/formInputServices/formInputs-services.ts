import { InputType } from "./formInputs-types";

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
  



  //Here is the endpoint for adding a new input to the local array InputData
  const addNewInput = async (email: string, mobilePhone: string, description: string)=>{
    const newInput: typeof InputType = {
      email,
      mobilePhone,
      description,
    };
  
    InputData.push(newInput);
    console.log(InputData)

  
  }



export { getAllInputData, addNewInput};