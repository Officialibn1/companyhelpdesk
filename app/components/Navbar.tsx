import Image from 'next/image'
import React from 'react'
import logo from './logo.webp'
import Link from 'next/link'
import NavBtn from './NavBtn'


const Navbar = () => {
  return (
    <nav>
        <div className="deskLogo">
            <Image 
                src={logo}
                width={60}
                quality={100}
                alt='Helpdesk Logo'
            />
            <span>HelpDesk</span>
        </div>

        <div className="navLinks">
            <ul className='desktopLinks'>
                <li><Link href={'/'}>Dashboard</Link></li>
                <li><Link href={'/tickets'}>Tickets</Link></li>
                <li><Link href={'/tickets/create'}>Create Ticket</Link></li>
            </ul>

            <NavBtn />
        </div>
    </nav>
  )
}

export default Navbar