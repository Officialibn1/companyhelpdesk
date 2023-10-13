import { Ticket } from '@/typings'
import Link from 'next/link'
import React from 'react'
import { tickets } from '@/dummyData'

// const fetchTickets = async () => {
//   const res = await fetch('http://localhost:4000/tickets', {
//     next: {
//       revalidate: 0
//     }
//   })

//   const data: Ticket[] = await res.json()
  
//   return data;
// }

const TicketsPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 2500))

  // const tickets = await fetchTickets();

  return (
    <>
      <div className="blogCardsContainer">
        {tickets.map(ticket => (
          <Link className='ticketsCard' href={`/tickets/${ticket.id}`} key={ticket.id}>
            <h1>Author: <span>{ticket.author}</span></h1>
            <h3>Email: <span>{ticket.email}</span></h3>
            <h3>Title: <span>{ticket.title}</span></h3>
            <p>
              {ticket.body.slice(0, 150)}
            </p>

            <span className={`ticketPill ${ticket.priority}`}>
              {ticket.priority} Priority
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TicketsPage