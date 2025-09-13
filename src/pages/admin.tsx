import { useEffect, useState } from "react"
import useSWR from "swr"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import toast from 'react-hot-toast';
const fetcher = (url: string) => fetch(url).then(res => res.json())
const admin = () => {
    const [filter,setFilter] = useState("hiii")
    useEffect(()=>{console.log(filter)})
    const { data, error, isLoading,mutate } = useSWR('/api/Routes', fetcher)
    if (error)  return (
    <div className="loading">
        <div>
            <h2>OOPS....</h2>
            <h3>there is a connectivity Issue..</h3>
        </div>
    </div>)
    if (isLoading) return (
    <div className="loading">
        <div>
            <h2>Please Wait...</h2>
        <div className="spinner-border"></div>
        </div>
    </div>)
    const router = useRouter()

    function handleClick(response: any) {
        router.push({
            pathname: `/message/${response._id}`,
            query: response
        })
    }

    async function deletemsg (id: any){
        try {
           await axios.delete('/api/Routes',{params:{id:id}})
           mutate()
           toast.success("deleted Successfully") 
        } catch (error) {
            toast.error("already deleted...") 
        } 
    }

    async function Updatestatus (id: any){
        try {
           const response = await axios.patch('/api/Routes',{id: id})
           console.log(response)
           mutate()
           toast.success(response.data.status) 
        } catch (error) {
            toast.error("Error") 
        }
        
    }

    return (
        <section className="responses">
            <div className="admin-header">
                <input type="search" placeholder="Search"/>
                <select id="myDropdown" name="myOption" value={filter} onChange={(e)=>{setFilter(e.target.value)}} >
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
                </select>
            </div>
            
            {data.msg.map((response: any, index: any) => (
                <div className="message-box">
                <div key={index} className="messages">
                    <div className="d-flex flex-column">
                        <p><b>Email: </b>{response.Email}</p>
                        <p><b>Purpose: </b>{response.Purpose}</p>
                        <p><b>Date & Time: </b>{response.Date} & {response.Time}</p>
                    </div>
                    <div id="clickMe" className="d-flex align-items-center gap-3">
                        {String(response.Status)=='true' ? <button onClick={() => { Updatestatus(response._id);}} className="btn btn-success p-2"><i className="fa-solid fa-check"></i> Readed</button>:<button onClick={() => { Updatestatus(response._id);}} className="btn btn-warning p-2"><i className="fa-solid fa-xmark"></i> Unreaded</button>}
                        <button onClick={() => { handleClick(response)}} className="btn btn-primary p-2"><i className="fa-solid fa-eye"></i> View</button>
                        <button onClick={() => { deletemsg(response._id);}} className="btn btn-danger p-2"><i className="fa-solid fa-trash"></i> Delete</button>
                    </div>
                </div>
                </div>
            ))}
        </section>
    )
}

export default admin
