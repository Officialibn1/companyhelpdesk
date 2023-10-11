import { Ticket } from '@/typings';
import Link from 'next/link';
import React from 'react'

const fetchTickets = async () => {
    const res = await fetch('http://localhost:4000/tickets/', {
        next: {
            revalidate: 0
        }
    })

    const data: Ticket[] = await res.json()

    return data;
}


const TicketsPage = async () => {
    const tickets = await fetchTickets()

  return (
    <section>
        <h1 className="pageHeading">Opened Tickets</h1>

        <div className="my-20 flex flex-wrap w-full gap-8 justify-center">
            {tickets.map(ticket => (
                <Link key={ticket.id} href={`/tickets/${ticket.id}`} className="ticketsCard">
                    <div>
                    <h1><span>Author:</span> {ticket.author}</h1>
                    <h3>Email: {ticket.email}</h3>
                    <h3>Title: {ticket.title}</h3>

                    <p>{ticket.body.slice(0, 120)}</p>

                    <div className={`ticketBadge ${ticket.priority}`}>
                        {ticket.priority} Priority
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default TicketsPage