import { Ticket } from '@/typings'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import LoadingSkel from './loading'




const fetchTicket = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 30
        }
    })

    const data: Ticket = await res.json()

    if (!res.ok) {
        notFound()
    }

    return data;
}

const TicketPage = async ({params}: {params: {id: string}}) => {
    
    const ticket = await fetchTicket(params.id)

  return (
    <section>
        <h1 className="text-2xl outline outline-base-content p-3 text-center mb-5">
            Ticket Details Page
        </h1>

        <Suspense fallback={<LoadingSkel />}>

            <div className="ticketsDetails">
                <h1><span>Author: </span>{ticket.author}</h1>
                <h3>Email: {ticket.email}</h3>
                <h3>Title: {ticket.title}</h3>

                <p>
                    {ticket.body}
                </p>

                <div className={`ticketBadge ${ticket.priority}`}>
                    {ticket.priority} Priority
                </div>
            </div>
        </Suspense>

        <div className="flex items-center justify-center p-5">
            <Link href={'/tickets'} className="btn btn-outline">View All Tickets</Link>
        </div>

    </section>
  )
}

export default TicketPage