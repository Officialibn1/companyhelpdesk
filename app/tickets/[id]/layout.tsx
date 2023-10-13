import Link from 'next/link'
import React from 'react'

const TicketLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className="deskHeader">View Ticket Details</h1>

        <section className="sectionText">
            <p>
                Welcome to the details page of each ticket, here you can view the full details of a specific ticket.
            </p>
        </section>

        <h1 className="sectionHeader">
            Ticket Details
        </h1>

        {children}

        <div className="ticketLinkContainer">
            <Link href={'/tickets'} className='ticketLink'>
                All Tickets
            </Link>
        </div>
    </div>
  )
}

export default TicketLayout