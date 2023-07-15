import '../styles/Footer.css';
import { Element } from 'react-scroll';

function Footer() {
    return (
        <Element name='footerScroll'>
        <div className="footer-container">
            <span>Interested</span>
            <button>Get in Touch</button>
        </div>
        </Element>
    );
}

export default Footer;