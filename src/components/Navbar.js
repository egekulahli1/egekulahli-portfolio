import '../styles/Navbar.css';
import { Link } from 'react-scroll';
function Navbar() {
    return (
        <div className="navbar-container">
            <span className = 'navbar-name'>Ege Külahlı</span>
            <div className='navbar-link-container'>
                <Link to='aboutScroll' smooth={true} duration={1000}>About</Link>
                <Link to='skillsScroll' smooth={true} duration={1000}>Skills</Link>
                <Link to='projectsScroll' smooth={true} duration={1000}>Projects</Link>
                <Link to='resumeScroll' smooth={true} duration={1000}>Resume</Link>
                <Link to='contactScroll' smooth={true} duration={1000}>Contact</Link>
            </div>

        </div>
    );
}

export default Navbar;