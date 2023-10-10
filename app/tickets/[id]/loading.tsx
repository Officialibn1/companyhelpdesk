import Link from 'next/link'
import React from 'react'

const LoadingSkel = () => {
  return (
    <div>
      {/* <h1 className="text-2xl outline outline-base-content p-3 text-center mb-5">
          Ticket ID: <span className='text-green-400'>**** </span>Details
      </h1> */}

      <section className='ticketsDetails'>
        <div className="ticketLoading"></div>
        <div className="ticketLoading"></div>
        <div className="ticketLoading"></div>
        <div className="ticketLoading smLoading"></div>
        <div className="ticketLoading smLoading"></div>
        <div className="ticketLoading smLoading"></div>
        <div className="ticketLoading smLoading"></div>
        <div className="ticketLoading smLoading"></div>
    </section>

    {/* <div className="flex items-center justify-center p-5">
            <Link href={'/tickets'} className="btn btn-outline">View All Tickets</Link>
        </div> */}
    </div>
  )
}

export default LoadingSkel