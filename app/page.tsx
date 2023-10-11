import React from 'react'

const HomePage = () => {
  return (
    <main>
        <h1 className="deskHeader">Welcome to Company Helpdesk: Your Gateway to Seamless Support</h1>

        <section className='sectionText'>
            <p>
            At Company, we stand firmly on the pillars of seamless communication and unwavering efficiency. We understand that in a dynamic workplace like ours, occasional hiccups and challenges are inevitable. That&apos;s why we&apos;ve crafted a solution tailored just for you – welcome to our Helpdesk, the beating heart of our support system. Here, we invite you to embark on a journey where reporting issues, sharing feedback, and ensuring the smooth operation of every process is not just a task; it&apos;s a seamless experience.
            </p>
        </section>

        <h1 className="deskHeader">
            Your Voice Matters
        </h1>

        <section className="sectionText">
            <p>
                Here at Company Helpdesk, we believe in the power of your voice. Your insights, observations, and even frustrations are invaluable to us. They serve as the compass guiding us toward continuous improvement. By reporting issues promptly and sharing your feedback candidly, you play an integral role in sculpting our work environment, making it not just functional, but exceptional.
            </p>
        </section>

        <h1 className="sectionHeader">
            Latest Updates Blog
        </h1>

        <div className="blogCardsContainer">
            <div className="blogCard">
                <h1>Introducing Enhanced User Profiles</h1>

                <p>
                We&apos;re excited to announce the launch of enhanced user profiles! You can now personalize your profile with a photo, update your contact information, and add a brief bio. This feature aims to foster better connections among colleagues and streamline communication within the company. Head to your profile settings to get started!
                </p>
            </div>
        </div>
    </main>
  )
}

export default HomePage