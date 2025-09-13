import React, { useState } from 'react'
import Navbar from "@/components/Navbar";
import toast from 'react-hot-toast';
const contactus = () => {
  const [Username, setUsername] = useState("")
  const [PhoneNo, setPhoneNo] = useState("")
  const [Email, setEmail] = useState("")
  const [Purpose, setPurspose] = useState("")
  const [Message, setMessage] = useState("")
  let regcode = async (e: any) => {
    e.preventDefault()
    const data = { Username, PhoneNo, Email, Message, Purpose}
    console.log(data)
            var response=await fetch('/api/Routes',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg=="Success"){
          setUsername("")
          setPhoneNo("")
          setEmail("")
          setMessage("")
          setPurspose("")
          toast.success("Response Send Successfully...")
        }
        else{
          toast.error("All Fields Are required...")
        }
  }
  return (
    <div>
        <Navbar/>
      <div className='Contact-container'>
        <div className='contact-item'>
            <h3>Contact US</h3>
            <form onSubmit={regcode}>
                <input type="text" placeholder='Enter Name' className="form-control" value={Username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="text" placeholder='email-Id' className="form-control" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="number" placeholder='Mobile Number' className="form-control" value={PhoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                <input type="text" placeholder='Purpose' className="form-control" value={Purpose} onChange={(e)=>{setPurspose(e.target.value)}}/>
                <textarea rows={5} placeholder='Your message' className="form-control" value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <button className='contact-button'>Send Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default contactus
