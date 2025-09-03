import { useState } from "react";
import { Route, Routes  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
function App() {
  return (
<div className="bg-gradient-to-r from-[#1E293B] to-[#0F766E] min-h-screen text-white">
   <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
  </Routes>
  
</div>



  );
}

export default App;
