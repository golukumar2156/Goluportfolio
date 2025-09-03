import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import Achievements from './Achievements'

function About() {
    const location =useLocation();
    if(location.pathname === "/" || location.pathname ==="/contact") return null;
  return (
    <div>
        <Navbar/>
        <Achievements/>
        <Footer/>
    </div>
  )
}

export default About