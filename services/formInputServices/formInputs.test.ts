import { 
    getAllInputData
} from './formInputs-services';



test('Get all input records successfuly', () =>{
    expect(getAllInputData()).toStrictEqual([
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
      ])
})