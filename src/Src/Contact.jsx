import { useState } from 'react'
import { sendWhatsApp } from '../utils/whatsapp'

export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',message:''})

  const handle=(e)=>setForm({...form,[e.target.name]:e.target.value})

  return (
    <div style={{padding:40,maxWidth:400,margin:'auto'}}>
      <input name='name' placeholder='Name' onChange={handle} />
      <input name='email' placeholder='Email' onChange={handle} />
      <textarea name='message' placeholder='Message' onChange={handle} />
      <button onClick={()=>sendWhatsApp(form)}>Send</button>
    </div>
  )
}
