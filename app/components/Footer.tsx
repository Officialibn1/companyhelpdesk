import Image from 'next/image'
import React from 'react'
import logo from './logo.webp'
import Link from 'next/link'
import { FaGithubAlt, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="footerLogo">
            <Image
                src={logo}
                width={120}
                quality={100}
                alt='desk footer logo'
            />
            <span>HelpDesk</span>
        </div>

        <div className="footerLeft">
            <ul>
                <li><Link href={'/'}><FaXTwitter className=" text-xl" /></Link></li>
                <li><Link href={'/'}><FaLinkedinIn className=" text-xl" /></Link></li>
                <li><Link href={'/'}><FaInstagram className=" text-xl" /></Link></li>
                <li><Link href={'/'}><FaGithubAlt className=" text-xl" /></Link></li>
            </ul>

            <p>
                &copy; 2023 by Ibn
            </p>
        </div>
    </footer>
  )
}

export default Footer