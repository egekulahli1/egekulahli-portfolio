import "../styles/Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <span className="navbar-name">Ege Külahlı</span>
        <div className="navbar-link-container">
          <Link id="nav-button" to="homeScroll" smooth={true} duration={1000}>
            Home
          </Link>
          <Link id="nav-button" to="skillsScroll" smooth={true} duration={1000}>
            Skills
          </Link>
          <Link id="nav-button" to="projectsScroll" smooth={true} duration={1000}>
            Projects
          </Link>
          <Link id="nav-button" to="resumeScroll" smooth={true} duration={1000}>
            Resume
          </Link>
          <Link id="nav-button" to="contactScroll" smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
