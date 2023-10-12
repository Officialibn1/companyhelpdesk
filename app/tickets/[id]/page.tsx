import { Ticket } from '@/typings'
import Link from 'next/link'
import React from 'react'

const fetchTicket = async (id: string) => {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 30
        }
    })

    const data: Ticket = await res.json()

    return data
}

const TicketPage = async ( { params }: {
    params: {id: string}
}) => {
    
    const ticket = await fetchTicket(params.id)
    return (
    <main>
        <h1 className="deskHeader">View Ticket Details</h1>

        <section className="sectionText">
            <p>
                Welcome to the details page of each ticket, here you can view the full details of a specific ticket.
            </p>
        </section>

        <h1 className="sectionHeader">
            Ticket Details
        </h1>

        <div className="ticketsDetails">
            <h1>Author: <span>{ticket.author}</span></h1>
            <h3>Email: <span>{ticket.email}</span></h3>
            <h3>Title: <span>{ticket.title}</span></h3>

            <p>
                {ticket.body}
            </p>

            <span className={`ticketPill ${ticket.priority}`}>
                {ticket.priority} Priority
            </span>
        </div>

        <div className="ticketLinkContainer">
            <Link href={'/tickets'} className='ticketLink'>
                All Tickets
            </Link>
        </div>
    </main>
  )
}

export default TicketPage