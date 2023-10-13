import React from 'react'

const TicketsLoading = () => {
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

      <div className="blogCardsContainer">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
          <div key={i} className="ticketsCard">
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
              <div className="loadingUiSm"></div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default TicketsLoading