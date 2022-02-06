import React from "react";
import {faHandPointer} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
//import Background from '../../../assets/skills/js.svg'

const SkillsCard = (props) => {

    return (
        <NavLink to={'/skills/' + props.path} className='skills-card'
                 style={{backgroundImage: `url(https://Nklj.github.io/portfolio/skills/${props.img})`}}>
            <div className="skills-card__mask">
                <div>
                    <h4 className="skills-card__mask__title">{props.title}</h4>
                    <FontAwesomeIcon icon={faHandPointer} />
                    <h5>Нажми!</h5>
                </div>
            </div>
        </NavLink>
    )
}

export default SkillsCard