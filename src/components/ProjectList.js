import { Element, Link } from "react-scroll";
import "../styles/ProjectList.css";
import macbookPro from "../projectassets/macbook-pro.png";
import phoneMockup from "../projectassets/phone-mockup.png";
import { FaChevronDown } from "react-icons/fa";

function ProjectList() {
  return (
    <div className="project-list">
      <div name="projectsScroll"  className="project-container">
        <div className="project-list-item">
          <div className="project-list-text">
            <span className="project-list-text-title">Projects</span>
            <div className="project-list-content">
              <span className="project-list-item-subtitle">
                Type your project title here
              </span>
              <span className="project-list-item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </div>
          </div>
          <Element name="projectsScroll" className="project-list-item-image">
            <img src={phoneMockup} alt="project cover" />
          </Element>
        </div>
        <Link to='project2' smooth={true} duration={1000} className="project-button"> <FaChevronDown size={50}/></Link>
      </div>
      <div className="project-container">
        <div className="project-list-item">
          <div className="project-list-text">
            <span className="project-list-text-title">Projects</span>
            <div className="project-list-content">
              <span className="project-list-item-subtitle">
                Type your project title here
              </span>
              <span className="project-list-item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </div>
          </div>
          <div className="project-list-item-image">
          <Element name='project2' id ='project2'> <img src={macbookPro} alt="project cover" /> </Element>
          </div>
        </div>
        <Link to='project3' smooth={true} duration={1000} className="project-button"> <FaChevronDown size={50}/></Link>
      </div>
      <div name="project3" className="project-container">
        <div className="project-list-item">
          <div className="project-list-text">
            <span className="project-list-text-title">Projects</span>
            <div className="project-list-content">
              <span className="project-list-item-subtitle">
                Type your project title here
              </span>
              <span className="project-list-item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </div>
          </div>

          <Element name="project3"  id ='project3' className="project-list-item-image">
            <img src={phoneMockup} alt="project cover" />
          </Element>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectList;
