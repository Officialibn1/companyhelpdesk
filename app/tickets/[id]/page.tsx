import { Ticket } from '@/typings'
import Link from 'next/link'
import React from 'react'
import { tickets } from '@/dummyData'
import { notFound } from 'next/navigation'


// const fetchTicket = async (id: string) => {
//     const res = await fetch(`http://localhost:4000/tickets/${id}`, {
//         next: {
//             revalidate: 30
//         }
//     })

//     const data: Ticket = await res.json()

//     return data
// }

const TicketPage = async ( { params }: {
    params: {id: string}
}) => {
    
    // const ticket = await fetchTicket(params.id)

    // if (!ticket) {
    //     notFound()
    // }

    const dummyTicket = tickets.find((ticket) => ticket.id === params.id)

    if (!dummyTicket) {
        notFound()
    }

    console.log(dummyTicket);
    
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
            <h1>Author: <span>{dummyTicket.author}</span></h1>
            <h3>Email: <span>{dummyTicket.email}</span></h3>
            <h3>Title: <span>{dummyTicket.title}</span></h3>

            <p>
                {dummyTicket.body}
            </p>

            <span className={`ticketPill ${dummyTicket.priority}`}>
                {dummyTicket.priority} Priority
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