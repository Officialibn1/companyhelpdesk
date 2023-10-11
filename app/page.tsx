import { blogs } from '@/dummyData'
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
            {blogs.map(blog => (
                <div className="blogCard" key={blog.id}>
                    <h1>{blog.header}</h1>

                    <p>{blog.body}</p>
                </div>
            ))}
        </div>

        <div className="sectionText">
            <p>
            These updates aim to enhance your experience at Company and create a more collaborative, informed, and supportive work environment. We value your feedback, so if you have any suggestions or questions about these updates, don&apos;t hesitate to reach out through the Helpdesk. Thank you for being an essential part of our Company community!
            </p>
        </div>
    </main>
  )
}

export default HomePage