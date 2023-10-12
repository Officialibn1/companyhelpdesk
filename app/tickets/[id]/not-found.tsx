import Link from 'next/link'
import React from 'react'

const TicketNotFound = () => {
  return (
    <main>
        <h1 className="deskHeader">We hit a brickwall 🧱</h1>

        <section className="sectionText">
            <p>
                Ooopss.. Sorry the ticket you&apos;re trying to view could not be found
            </p>
        </section>

        <div className="ticketLinkContainer">
            <Link href={'/tickets'} className='ticketLink'>
                View All Available Tickets
            </Link>
        </div>
    </main>
  )
}

export default TicketNotFound