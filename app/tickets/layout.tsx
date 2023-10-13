import React from 'react'

const TicketsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <h1 className="deskHeader">View All Tickets</h1>

        <section className="sectionText">
            <p>
                Transparency is our watchword. On this Tickets page, you can effortlessly monitor the progress of all submitted tickets. Track their status, witness the journey from submission to resolution, and rest assured that your concerns are in capable hands.
            </p>
        </section>

        <h1 className="sectionHeader">
            All Available Tickets
        </h1>
        {children}
    </main>
  )
}

export default TicketsLayout