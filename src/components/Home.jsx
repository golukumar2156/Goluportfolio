import MidText from './MidText';
import SkillsCard from './Skillscard';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    
    if (location.pathname !== "/") return null;

    return (
        <div>
            <MidText />
            <SkillsCard />
        </div>
    );
}

export default Home;
