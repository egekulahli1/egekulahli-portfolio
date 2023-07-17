import "../styles/Resume.css";
import { Element } from "react-scroll";

function Resume() {
  return (
    <Element name="resumeScroll" className="resume-container">
        <span className="resume-main-title">
            Resume
        </span>
        <div className="resume-item">
            <span className="resume-item-date">2022 - present</span>
            <div className="resume-item-content">
                <span className="resume-item-job-title">PPC (Pay Per Click) Analyst</span>
                <span className="resume-item-company">Info Deal Business Solutions - Contract</span>
                
                    <ul className="resume-item-description">
                        <li>Managed and optimized PPC campaigns for diverse clients across industries, including e-commerce, SaaS, and healthcare.</li>
                        <li>Conducted thorough keyword research, competitor analysis, and A/B testing to improve campaign performance and drive qualified leads.</li>
                    </ul>
            </div>
        </div>
        <div className="resume-item">
            <span className="resume-item-date">2022 - present</span>
            <div className="resume-item-content">
                <span className="resume-item-job-title">PPC (Pay Per Click) Analyst</span>
                <span className="resume-item-company">Info Deal Business Solutions - Contract</span>
                
                    <ul className="resume-item-description">
                        <li>Managed and optimized PPC campaigns for diverse clients across industries, including e-commerce, SaaS, and healthcare.</li>
                        <li>Conducted thorough keyword research, competitor analysis, and A/B testing to improve campaign performance and drive qualified leads.</li>
                    </ul>
            </div>
        </div>
    </Element>
  );
}

export default Resume;
