import { Label } from "@radix-ui/react-menubar"
import { Input } from "./ui/input"

import { Button } from "./ui/button"
import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ContactSchemaState } from "./Schema/UserSchema";
import emailjs, {  } from '@emailjs/browser'

function ContactMe() { 
    var templateParams = {
        name: 'James',
        notes: 'Check this out!',
      };
      
      emailjs.send('service_mhm29pf', 'template_15z1k2v', templateParams, 'k9yRkceDTvz1hwjAM').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    const loading = false;
    const [input, setInput] = useState<ContactSchemaState>({
        email: "",
        contact: "",
        name:"",
        message:""
      });
    

   
    const changeEventHandler= (e:ChangeEvent<HTMLInputElement>) => {
const {name, value} = e.target;
setInput({...input, [name]: value});
    };
    const submitHandler =  (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input)
    };
  
  return (
    <div className="max-w-6xl mx-auto my-2 items-center justify-center  pb-10">
        <div className=" ">
            <h1 className="font-medium text-4xl md:text-6xl text-center">CONTACT ME</h1>
            <form action="" onSubmit={submitHandler}>
            <div className="mt-5">
                <Label>Name</Label>
                <Input
                name="name"
                type="name"
                value={input.name}
                placeholder="Enter your name"
                onChange={changeEventHandler}
                />
                
              
            </div>
            <div className="mt-5">
                <Label>Email</Label>
                <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={changeEventHandler}
                />
                
              
            </div>
            <div className="mt-5">
                <Label>Contact</Label>
                <Input
                name="contact"
                type="contact"
                placeholder="Enter your number"
                value={input.contact}
                onChange={changeEventHandler}
                />
                
              
            </div>
            <div className="mt-5">
                <Label>Message</Label>
                <Input
                name="message"
                type="message"
                value={input.message}
                placeholder="Enter your message"
                onChange={changeEventHandler}
                />
                
              
            </div>
            {
                loading ? (<Button className="w-full mt-5 bg-orange-400 hover:bg-orange-700"><Loader2 className="animate-spin"/>Please wait</Button>) : (<Button className="w-full mt-5 bg-orange-400 hover:bg-orange-700">Sumbit</Button>)
            }
            </form>
        </div>
        </div>

  )
}

export default ContactMe