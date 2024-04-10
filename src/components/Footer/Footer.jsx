import React from "react";
import './Footer.sass'
import {faTelegram, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <footer className='footer'>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Volkov Nikolay
            </p>
            <div className="footer-social-links">
                {/* <a target='_blank' href="https://www.facebook.com/vlkvnklj" className="footer-social__link">
                    <FontAwesomeIcon icon={faFacebook} />
                </a> */}
                <a target='_blank' href="https://t.me/nikolay_vlkv/" className="footer-social__link">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a target='_blank' href="https://github.com/Nklj" className="footer-social__link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer