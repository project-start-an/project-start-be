

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
  



export { getAllInputData};