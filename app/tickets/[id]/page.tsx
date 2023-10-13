import { Ticket } from '@/typings'
import React, { Suspense } from 'react'
import { tickets } from '@/dummyData'
import { notFound } from 'next/navigation'
import TicketLoading from './loading'


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
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const dummyTicket = tickets.find((ticket) => ticket.id === params.id)

    if (!dummyTicket) {
        notFound()
    }

    // console.log(dummyTicket);
    
    return (
    <main>
        <Suspense fallback={<TicketLoading />}>

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
        </Suspense>
    </main>
  )
}

export default TicketPage