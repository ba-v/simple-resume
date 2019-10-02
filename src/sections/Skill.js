import React, {Component} from 'react';
import data from "../data.json"
import Fullpage from '../components/Fullpage'
import SkillCard from '../components/SkillCard'
import './Skill.css';
import {Link} from 'react-scroll'

class Skill extends Component {
    render() {
        return (
            <div>
                <Fullpage className="third">
                    <h3>
                        {data.sections[1].title}
                    </h3>
                    <div className="cards-wrapper">
                        {data.sections[1].items.map(eachskill => {
                                return (
                                    <SkillCard skill={eachskill}/>
                                )
                            }
                        )}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="up" spy={true} smooth={true} offset={50} duration={500}
                      onSetActive={this.handleSetActive}>
                    <img id="up" src="images/up.png" alt="up"/>
                </Link>
            </div>
        )
    }
}

export default Skill;