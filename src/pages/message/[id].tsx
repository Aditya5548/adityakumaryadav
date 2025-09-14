import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
const MessagePage = () => {
  const router = useRouter()
  const data = router.query
  const [status,setStatus]= useState(data.Status)
  async function Updatestatus (id: any){
        try {
           const response = await axios.patch('/api/Routes',{id: id})
           setStatus(String(status) === 'true' ? 'false' : 'true')
           toast.success(response.data.status) 
        } catch (error) {
            toast.error("Error") 
        }
        
    }

  return (
    <section className='container-fluid d-flex flex-col justify-content-center'>
      <div className='message-data'>
        <h2 className='text-center'>Message Details</h2>
        <div className='py-3 message-details'>
          <p><b>Id   </b>{data._id}</p>
          <p><b>Name   </b>{data.Username}</p>
          <p><b>Email   </b>{data.Email}</p>
          <p><b>Phone No  </b>{data.PhoneNo}</p>
          <p><b>Purpose   </b>{data.Purpose}</p>
          <p className='border-bottom-none'><b>Message   </b>{data.Message}</p>
        </div>
        <div className='d-flex justify-content-between gap-2'>
          <Link href={`tel:+91${data.PhoneNo}`} className='btn btn-primary p-2'><i className="fa-solid fa-phone-volume"></i> Call</Link>
          <Link href={`mailto:${data.Email}`} className='btn btn-danger p-2'><i className="fa-solid fa-envelope"></i> Email</Link>
          <Link href={`https://wa.me/${data.PhoneNo}`} className='btn btn-success p-2 '><i className="fa-brands fa-whatsapp"></i> WhatsApp</Link>
        </div>
        <div  className='mt-3'>
          {String(status)=='true' ? <button onClick={() => { Updatestatus(data._id);}} className="btn btn-success p-2 w-100"><i className="fa-solid fa-check"></i> Readed</button>:<button onClick={() => { Updatestatus(data._id);}} className="btn btn-warning p-2 w-100"><i className="fa-solid fa-xmark"></i> Mark as read</button>}
        </div>
      </div>
    </section>
  )
}

export default MessagePage
