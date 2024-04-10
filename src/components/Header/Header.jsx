import React from "react";
import "./Header.sass";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
      <header className="header">
        <div className="header-content">
          <h1 className="header__title">Николай Волков</h1>
          <h2 className="header__subtitle">Frontend Developer</h2>
          <div className="header-social-links">
            {/* <a target='_blank' href="https://www.facebook.com/vlkvnklj" className="header-social__link">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a> */}
            <a target='_blank' href="https://t.me/nikolay_vlkv" className="header-social__link">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Nklj"
              className="header-social__link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </header>
    </Animated>
  );
};

export default Header;
