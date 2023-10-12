'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBtn = () => {
  const [show, setShow] = useState(false)

    return (
    <div className="navBtnContainer">
        <button className="navBtn" onClick={() => setShow(true)}>
            <GiHamburgerMenu />
        </button>

        <div className={`mobileNavLinks ${show ? '-right-8' : '-right-96'}`}>
            <button className="closeBtn" onClick={() => setShow(false)}>
                <AiOutlineClose />
            </button>
            <ul>
                <li><Link onClick={() => setShow(false)} href={'/'}>Dashboard</Link></li>
                <li><Link onClick={() => setShow(false)} href={'/tickets'}>Tickets</Link></li>
                <li><Link onClick={() => setShow(false)} href={'/tickets/create'}>Create Ticket</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default NavBtn