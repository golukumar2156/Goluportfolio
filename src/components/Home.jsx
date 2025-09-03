
import Navbar from './Navbar'
import MidText from './MidText'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import SkillsCard from './Skillscard';

function Home() {
    const location =useLocation();
    if(location.pathname ==="/about" ||  location.pathname === "/contact" ) return null;
  return (
    <div>
        <Navbar/>
        <MidText/>
        <SkillsCard/>
        <Footer/>
    </div>
  )
}

export default Home