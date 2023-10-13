import React from 'react'

const TicketsLoading = () => {
  return (
    <main>
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