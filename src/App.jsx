import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gradient-to-r from-[#1E293B] to-[#0F766E] min-h-screen text-white">
      <Navbar/>
       <ScrollToTop/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
