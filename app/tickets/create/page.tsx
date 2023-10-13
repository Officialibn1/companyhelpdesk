import TicketForm from '@/app/components/TicketForm'
import React from 'react'

const CreatePage = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <>

      <TicketForm />

    </>
  )
}

export default CreatePage