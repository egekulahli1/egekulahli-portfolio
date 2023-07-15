import { Element } from "react-scroll";
import "../styles/Skills.css";
import javascript from "../skillassets/javascriptlogo.png";
import react from "../skillassets/reactlogo.png";
import nodejs from "../skillassets/nodejslogo.png";

export default function Skills() {
    return (
        <Element name="skillsScroll" className="skills-container">
            <span className="skills-container-title">Hard Skills</span>
            <div className="skills-list">
                <div className="skills-list-item">
                    <img src={javascript} alt="javascript" />
                    <span className="skills-list-item-title">Java Script</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="skills-list-item">
                    <img src={react} alt="react" />
                    <span className="skills-list-item-title">React.Js</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="skills-list-item">
                    <img src={nodejs} alt="nodejs" />
                    <span className="skills-list-item-title">Node.JS</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="skills-list-item">
                    <img src={javascript} alt="javascript" />
                    <span className="skills-list-item-title">Java Script</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="skills-list-item">
                    <img src={react} alt="react" />
                    <span className="skills-list-item-title">React.Js</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="skills-list-item">
                    <img src={nodejs} alt="nodejs" />
                    <span className="skills-list-item-title">Node.JS</span>
                    <span className="skills-list-item-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
            </div>        
        </Element>
    );
}

