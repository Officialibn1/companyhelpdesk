'use client'
import React, { useState} from 'react'
import { useRouter } from "next/navigation";


const TicketForm = () => {
    const router = useRouter()
    
    // States
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('Low')
    const [isLoading, setIsLoading] = useState(false)

    const ticket = {
        author,
        title,
        body,
        email: 'officialibn@gmai;.com',
        priority
    }
    
    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        router.push(`/tickets`)
        // setIsLoading(true)
        
        // const res = await fetch(`http://localhost:4000/tickets`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(ticket)
        // })

        // if (res.status === 201) {
        //     router.refresh()
        //     router.push(`/tickets`)
        // }
    }

  return (
    <div className='ticketFormContainer'>
        <form className='ticketForm' onSubmit={(e) => submitTicket(e)}>
            
            <div className="inputWrapper">
                <label htmlFor="author">Officer:</label>
                
                <input 
                    type="text"  
                    value={author}
                    // required
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Your Name'
                    id="author"
                />
            </div>
            
            <div className="inputWrapper">
                <label htmlFor="title">Title:</label>
                
                <input 
                    type="text"  
                    value={title}
                    // required
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Your Complain Title'
                    id="title"
                />
            </div>
            
            <div className="inputWrapper">
                <label htmlFor="body">Your Complain:</label>
                
                <textarea
                    value={body}
                    // required
                    onChange={(e) => setBody(e.target.value)}
                    placeholder=''
                    id="body"
                />
            </div>

            <div className="inputWrapper">
                <label htmlFor="priority">Priority:</label>
                
                <select 
                    name="priority" 
                    id="priority" 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button 
                className="btn"
                disabled={isLoading}
            >
                {isLoading ? 'Submitting. . .' : 'Submit'}
            </button>

        </form>
    </div>
  )
}

export default TicketForm