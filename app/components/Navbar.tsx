import Image from 'next/image'
import React from 'react'
import logo from './logo.webp'
import Link from 'next/link'

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className=' hidden md:flex items-center gap-6 py-3 px-4 mb-10'>
          <Image src={logo} width={100} quality={100} alt='helpdesk logo' />
          
          <span className='text-3xl font-extralight'>HelpDesk</span>
          
          <Link href={'/'} className=' ml-auto btn btn-outline'>DashBoard</Link>
          <Link href={'/tickets'} className='btn btn-outline'>Tickets</Link>
          <Link href={'/tickets/create'} className='btn btn-outline'>Create</Link>
      </nav>

      <div className="navbar md:hidden bg-base-100 h-24 mb-5 p-0 items-center">
        <div className="navbar-start">
          <Link href={'/'} className="btn btn-ghost normal-case text-xl font-light">
            <Image 
              src={logo}
              width={60}
              quality={100}
              alt='Helpdesk Logo'
            />
            <span>HelpDesk</span>
          </Link>
        </div>

        <div className="navbar-end">
            <button className="btn">
              <GiHamburgerMenu className=" text-2xl " />
            </button>
        </div>

        
      </div>
    </>
  )
}

export default Navbar