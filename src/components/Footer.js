import "../styles/Footer.css";
import { Element } from "react-scroll";

function Footer() {
  return (
    <Element name="contactScroll" className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-title-container">
          <span className="footer-title">Interested?</span>
        </div>
        <button className="footer-button">
          <span className="footer-button-text">Get in Touch</span>
        </button>
      </div>
    </Element>
  );
}

export default Footer;
