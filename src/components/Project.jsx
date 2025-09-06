import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Projects from './Projects'
import { useLocation } from 'react-router-dom'

function Project() {
  const location =useLocation();
  if(location.pathname==="/about" || location.pathname==="/contact") return null;
  return (
    <div >
      <Projects/>
    </div>
  )
}

export default Project