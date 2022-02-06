import React from "react";
import './Footer.sass'
import {faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <footer className='footer'>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Volkov Nikolay
            </p>
            <div className="footer-social-links">
                <a target='_blank' href="https://www.facebook.com/vlkvnklj" className="footer-social__link">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target='_blank' href="https:/https://www.linkedin.com/in/nikolay-volkov-28552b1a7//" className="footer-social__link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target='_blank' href="https://github.com/Nklj" className="footer-social__link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer