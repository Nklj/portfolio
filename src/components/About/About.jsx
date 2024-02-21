import React from "react";
import './About.sass'
import Footer from "../Footer/Footer";
import {Animated} from "react-animated-css";

const About = () => {
    return (
        <>            
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='about page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">О себе</h2>
                    </div>
                    <div className="about-wrap grid">
                        <div className="about-description">
                            <h2 className="about__title">Персональные данные:</h2>
                            <p className="about__text">
                                Полное имя: Волков Николай Александрович

                            </p>
                            <p className="about__text">
                                День рождения: 5 ноября 1983 г.
                            </p>
                            <p className="about__text">
                                Город: Подгорица ( Черногория )        
                            </p>
                        </div>
                        <div  className="about-avatar">
                        </div>
                        <div className="about-description">
                            <h2 className="about__title">Опыт работы:</h2>
                            <div className='about-description__item'>
                                <p className="about__text">
                                Август 2022 — октябрь 2023
                                </p>
                                <p className="about__text">
                                ООО "Образовариум"
                                </p>
                                <p className="about__text">
                                Frontend-разработчик
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                Программирование и верстка мультимедийных образовательных продуктов для дошкольников и школьников. Поддержка, рефакторинг и оптимизация существующего кода.
                                </p>
                                <p className="about__text">
                                Стек: Vue2/3, Vuex, Nuxt, Pinia, Bootstrap, SCSS
                                </p>
                            </div>
                            <br/>
                            <h2 className="about__title">Образование:</h2>
                            <div className='about-description__item'>
                                <p className="about__text">
                                Брянская Государственная с/х Академия
                                </p>
                                <p className="about__text">
                                    Специальность: Инженер-электрик
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                    Онлайн курсы: Web-разработка
                                </p>
                                <p className="about__text">
                                    Период обучения: 1 год
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default About