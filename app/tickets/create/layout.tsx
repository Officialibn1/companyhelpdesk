import React from 'react'

const FormLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main>
        <h1 className="deskHeader">Create A New Ticket</h1>

        <section className="sectionText">
            <p>
                Encountered a problem or have a concern that needs attention? <br />Creating a new ticket is your direct line to our support team. Whether it&apos;s a bug in the software, a faulty gadget, an overdue task, or any other issue hindering your work, let us know, and we&apos;ll spring into action. Your feedback is invaluable, and resolving your concerns is our top priority. Fill out the details, and rest assured, we&apos;re here to assist you swiftly and efficiently.
            </p>
        </section>

        <h1 className="sectionHeader">
        Create Ticket 
        </h1>
        {children}
    </main>
  )
}

export default FormLayout