import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
       <h2 className='text-2xl bg-slate-800 p-3 text-center mb-5'>Dashboard</h2>

       <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati rem, temporibus ab delectus perspiciatis fugiat hic deleniti distinctio veritatis maiores nobis expedita consequatur. Incidunt, voluptatibus ipsum cupiditate ratione, aspernatur eveniet corporis voluptatem corrupti adipisci debitis illo. Ex cum eius reprehenderit vitae mollitia, veniam, nam iste a, id facilis commodi. Pariatur soluta rerum velit exercitationem deleniti reprehenderit, nostrum, est reiciendis delectus cum nesciunt doloremque nisi assumenda nobis odio aliquid maxime voluptates eveniet ex fuga dolorem labore! Necessitatibus architecto, deserunt laboriosam enim ipsam nulla accusamus repudiandae dolorem, quis sit dignissimos officiis hic consectetur et nemo ratione obcaecati itaque iure neque! Perferendis ea velit repudiandae distinctio quibusdam veritatis.</p>

       <div className=' mt-20'>
        <h1 className="text-2xl bg-slate-800 p-3 text-center mb-5">
          Recent Updates
        </h1>

        <section className="my-10 flex justify-center flex-wrap gap-7 ">
          <div className="card outline outline-base-content p-6 w-full md:w-80 bg-slate-950">
            <h3 className="text-2xl font-medium mb-5">
              Building website with Next 13
            </h3>

            <p className='text-justify'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae cum autem eaque vitae natus assumenda error id aliquid dolores, modi nam quos ducimus nulla? Tenetur ea fugit repellendus incidunt sed deleniti voluptatem ullam accusamus?
            </p>
          </div>
         {/* Card 2 */}
          <div className="card outline outline-base-content p-6 w-full md:w-80 bg-slate-950">
            <h3 className="text-2xl font-medium mb-5">
              Styling website with Daisy UI
            </h3>

            <p className='text-justify'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis vero nam ut? Labore quod, explicabo voluptas, tempore dolor ipsam obcaecati aliquid est at fugiat nam sed impedit, deserunt error distinctio! Voluptatibus corporis velit provident a quae.
            </p>
          </div>
         {/* Card 3 */}
          <div className="card outline outline-base-content p-6 w-full md:w-80 bg-slate-950">
            <h3 className="text-2xl font-medium mb-5">
              Styling with Tailwind CSS
            </h3>

            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae totam voluptatum harum rerum omnis id ratione, ad quo unde consequuntur debitis eligendi assumenda ut quis dolore doloremque. Distinctio itaque corporis fugiat sequi consequuntur.
            </p>
          </div>
        </section>
       </div>
    </div>
  )
}

export default HomePage