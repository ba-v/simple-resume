import React, {Component} from 'react';
import data from "../data.json"
import Fullpage from '../components/Fullpage'
import './About.css';
import {Link, Element} from 'react-scroll'

class About extends Component {
    render() {
        return (
            <div>
                <Fullpage className="second">
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <div>
                        {data.sections[0].items.map(p => {
                                return <div>{p.content}</div>;
                            }
                        )}
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500}
                          onSetActive={this.handleSetActive}>
                        <img src="images/down.png" alt="down" style={
                            {
                                maxWidth: 30,
                                maxHeight: 30
                            }
                        }/>
                    </Link>
                </Fullpage>
                <Element name="skill" className="element">
                </Element>
            </div>
        )
    }
}

export default About;