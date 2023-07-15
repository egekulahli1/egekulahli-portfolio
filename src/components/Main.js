import "../styles/Main.css";
import { BsArrowUpRight, BsChatLeft } from "react-icons/bs";

function Main() {
  return (
    <div className="main-container">
      <span className="main-title">Hello.</span>
      <span className="main-subtitle">
        I'm Ege, a passionate full stack developer who recently completed an
        intensive bootcamp, looking for entry-level roles in the area. Excited
        to showcase my skills and projects, I'm committed to continuous growth
        in the world of web development.
      </span>
      <div className="main-contact-container">
        <a
          href="https://www.linkedin.com/in/egekulahli/"
          target="_blank"
          rel="noopener noreferrer"
          className="main-linkedin-button"
        >
          <BsArrowUpRight className="main-linkedin-icon" />
          <span>My Linkedin Profile</span>
        </a>

        <div className="main-mail-container">
          
            <BsChatLeft />
            <div className="main-mail-container-text">
            <span>My Email (<a href="mailto:egekulahli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="main-mail-icon">
                egekulahli@gmail.com
            </a>)</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
