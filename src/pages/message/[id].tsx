import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
const MessagePage = () => {
  const router = useRouter()
  const data = router.query
  // console.log(data)
      async function Updatestatus (id: any){
        try {
           const response = await axios.patch('/api/Routes',{id: id})
           toast.success(response.data.status) 
        } catch (error) {
            toast.error("Error") 
        }
        
    }

  return (
    <section className='message-container'>
      <div className='message-data'>
        <h2 className='text-center'>Message Details</h2>
        <div className='py-3 message-details'>
          <p><b>Message Id   </b>{data._id}</p>
          <p><b>Name   </b>{data.Username}</p>
          <p><b>Email   </b>{data.Email}</p>
          <p><b>Phone No  </b>{data.PhoneNo}</p>
          <p><b>Purpose   </b>{data.Purpose}</p>
          <p className='border-bottom-none'><b>Message   </b>{data.Message}</p>
        </div>
        <div className='d-flex justify-content-around'>
          <Link href="https://share.google/Vapr3dDP2eam3jLxQ" className='btn btn-danger px-4 py-2'><i className="fa-solid fa-envelope"></i> Email</Link>
          <Link href={`tel:+91${data.PhoneNo}`} className='btn btn-primary px-4 py-2 '><i className="fa-solid fa-phone-volume"></i> Call</Link>
          {String(data.Status)=='true' ? <button onClick={() => { Updatestatus(data._id);}} className="btn btn-success p-2"><i className="fa-solid fa-check"></i> Readed</button>:<button onClick={() => { Updatestatus(data._id);}} className="btn btn-warning p-2"><i className="fa-solid fa-xmark"></i> Mark as read</button>}
           </div>
      </div>
    </section>
  )
}

export default MessagePage
