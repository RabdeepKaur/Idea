"use client"
import React, { useState,useActionState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { formScehma } from "@/lib/Validation"; // Adjusted the path to match the correct location
import {z} from "zod"


const Startup = () => {
  const [error, setErrors] = useState<Record<string, string>>({});
const [pitch,setPitch]= useState("** hello world**")

//
const handleFormSubmit=async (prevState:any,formData:FormData)=>{
  try{
const formValues={
  title:formData.get("title" ) as string,
  description:formData.get("description") as string,
  category:formData.get("category") as string,
  link:formData.get("Link") as string,
  pitch,
}

await formScehma.parseAsync(formValues);

//nst result=await createDiffieHellman(prevState,formData,pitch);
console.log(formValues)
  }catch(error){
if(error  instanceof z.ZodError){
    const fieldErorrs = error.flatten().fieldErrors;
  setErrors(fieldErorrs as unknown as Record<string,string>);
  return {...prevState,error:"Validation failed",status:"ERROR"};
}
  } return{
    ...prevState,
  }
};
const initialState = {
  error: "",
  status: "INITIAL",
};

const [state, formAction, isPending] = useActionState(handleFormSubmit, initialState);

  return (
   <form action={formAction} className='startup-form'>
    <div>
<label htmlFor="title" className='="startup-form_label'>Title </label>
<input
id="title"
name="title"
className="startup-form_input"
required
placeholder="startup Title"
/>
{error.title && <p className="startup-from_error">{error.title}</p>}
</div>

<div>
<label htmlFor="description" className='="startup-form_label'>description </label>
<input
id="descritption"
name="description"
className="startup-form_input"
required
placeholder="startup description"
/>
{error.description && <p className="startup-from_error">{error.description}</p>}
</div>

<div>
<label htmlFor="category" className='startup-form_label'>Category </label>
<input
id="category"
name="category"
className="startup-form_input"
required
placeholder="startup category"
/>
{error.category && <p className="startup-from_error">{error.category}</p>}
</div>

<div>
<label htmlFor="link" className='startup-form_label'>Cover Image </label>
<input
id="Link"
name="Link"
className="startup-form_input"
required
placeholder="startup Link"
/>
{error.Link && <p className="startup-from_error">{error.Link}</p>}
</div>

<div>
<label htmlFor="github" className='startup-form_label'>Github</label>
<input
id="Github"
name="Github"
className="startup-form_input"
required
placeholder="startup Github"
/>
{error.Github && <p className="startup-from_error">{error.Github}</p>}
</div>

<div data-color-mode="light">
<label htmlFor="pitch" className='startup-form_label'>Pitch</label>
<MDEditor
value={pitch}
onChange={(value)=>setPitch(value as string)}
id="pitch"
preview="edit"
height={300}
style={{borderRadius:20 ,overflow:"hidden"}}
textareaProps={{
  placeholder:
  "Describe your idea "
}}
previewOptions={{
  disallowedElements:["style"]
}}
/>

{error.pitch && <p className="startup-from_error">{error.pitch}</p>}
</div>
<div>
<button
  type="submit"
  className="  @apply rounded-full bg-black/20 font-medium text-[16px] text-white px-5 py-3;  "
  disabled={isPending}
>
  {isPending ? "Submitting..." : "Submit"}
</button>
</div>
   </form>
      
  )
}

export default Startup
