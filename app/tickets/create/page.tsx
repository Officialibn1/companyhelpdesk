'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CreateTicketPage = () => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('Low')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter();


    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setIsLoading(true)

        const ticket = {
            title,
            author,
            body,
            email: 'officialibn@gmai.com',
            priority
        }
        
        const res = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201) {
            router.refresh()
            router.push('/tickets')
        }
    } 
  return (
    <section>

        <h1 className="pageHeading">
            Create New Ticket
        </h1>

        <form className='ticketForm' onSubmit={(e) => submitTicket(e)}>

            <div className="ticketGroup">
                <label htmlFor="author">Officer: </label>
                <input 
                    type="text" 
                    name="author" 
                    id="author"
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className="ticketGroup">
                <label htmlFor="title">Complain Title: </label>
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="ticketGroup">
                <label htmlFor="body">Complain Details: </label>
                
                <textarea 
                    name="body" 
                    id="body" 
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>

            <div className="ticketGroup">
                <label htmlFor="author">Priority: </label>
                
                <select name="priority" id="priority" onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button 
                className='btn bg-slate-300 text-slate-950 hover:text-slate-300 btn-block'
                disabled={isLoading}
            >
                {isLoading ? 'Submiting. . .' : 'Submit'}
            </button>

            
        </form>
    </section>
  )
}

export default CreateTicketPage