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
                <li>
                    <a href={'https://twitter.com/__ibn1'} target='_blank'>
                        <FaXTwitter className=" text-xl" />
                    </a>
                </li>
                <li>
                    <a href={'https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/'} target='_blank'>
                        <FaLinkedinIn className=" text-xl" />
                    </a>
                </li>
                <li>
                    <a href={'https://instagram.com/__ibn1?igshid=NGVhN2U2NjQ0Yg=='} target='_blank'>
                        <FaInstagram className=" text-xl" />
                    </a>
                </li>
                <li>
                    <a href={'https://github.com/Officialibn1'} target='_blank'>
                        <FaGithubAlt className=" text-xl" />
                    </a>
                </li>
            </ul>

            <p>
                &copy; 2023 by Ibn
            </p>
        </div>
    </footer>
  )
}

export default Footer