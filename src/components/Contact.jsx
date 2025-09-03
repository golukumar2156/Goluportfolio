import React from 'react'
import Navbar from './Navbar'
import Formfill from './Formfill'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

function Contact() {
   const location=useLocation();
   if(location.pathname==="/" || location.pathname === "/about") return null;
  return (
    <div>
        <Navbar/>
        <Formfill/>
        <Footer/>
    </div>
  )
}

export default Contact