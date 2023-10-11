import './Globals.css';
import React from 'react'
import { Montserrat } from "next/font/google";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({subsets: ['latin']})

const layout = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <html lang='en' data-theme="cupcake">
        <body className={montserrat.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}

export default layout