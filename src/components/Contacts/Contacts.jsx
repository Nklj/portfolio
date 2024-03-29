import React from "react";
import "./Contacts.sass";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Animated } from "react-animated-css";

const Contacts = () => {
  return (
    <>
      <Animated animationIn="fadeInRight" isVisible={true}>
        <section className="contacts page-wrap">
          <div className="contacts-header">
            <h2 className="section__title">Мои контакты</h2>
          </div>
          <div className="contacts-wrap grid">
            <div className="contacts-card">
              <div className="contacts-card__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h5 className="contacts-card__title">E-mail адрес:</h5>
              <a
                href="mailto:nikolay_vlkv@mail.ru"
                className="contacts-card__link contacts-card__text"
              >
                nikolay_vlkv@mail.ru
              </a>
            </div>
            <div className="contacts-card">
              <div className="contacts-card__icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h5 className="contacts-card__title">Телефон:</h5>
              <a
                href="tel:+38267326197"
                className="contacts-card__link contacts-card__text"
              >
                +382 67 326 197
              </a>
            </div>
            <div className="contacts-card">
              <div className="contacts-card__icon">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <h5 className="contacts-card__title">Социальные сети:</h5>
              <div className="contacts-card__links">
                {/* <a className='contacts-card__link' target='_blank'
                                   href="https://www.facebook.com/vlkvnklj"><FontAwesomeIcon
                                    icon={faFacebook}/> Facebook</a> */}
                <a
                  className="contacts-card__link"
                  target="_blank"
                  href="https://www.linkedin.com/in/nikolay-volkov-28552b1a7/"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Animated>
    </>
  );
};

export default Contacts;
