"use client"
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const Startup = () => {
  const [error, setErrors] = useState<Record<string, string>>({});
const [pitch,setPitch]= useState("** hello world**")

const isPending=false
  return (
   <form action={()=>{}} className='startup-form'>
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
<button type="submit" className="startup-form_btn" disabled={isPending}>{isPending?"Submitting..." :"Submited"}Live </button>
</div>
   </form>
      
    
  )
}

export default Startup
