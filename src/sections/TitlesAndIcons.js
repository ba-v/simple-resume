import React, {Component} from 'react';
import data from "../data.json"
import Fullpage from '../components/Fullpage'
import {SocialIcon} from 'react-social-icons';
import './TitlesAndIcons.css';
import {Link, Element} from 'react-scroll'

class TitlesAndIcons extends Component {

    constructor() {
        super()
        this.state = {
            color: '#000000'
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor() {

        this.setState({
            color: this.state.color === ' #000000' ? ' #ffffff' : ' #000000'
        })
    }

    render() {
        return (
            <div>
                <Element name="up" className="element">
                </Element>
                <Fullpage className="first">
                    <h1 className="title"
                        style={{
                            color: this.state.color
                        }}
                        onMouseOver={this.changeColor}
                        onMouseLeave={this.changeColor}>
                        {data.title}
                    </h1>
                    <div>
                        <h2>
                            {data.subtitle}
                        </h2>
                    </div>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
                          onSetActive={this.handleSetActive}>
                        <img src="images/down.png" alt="down" style={
                            {
                                maxWidth: 30,
                                maxHeight: 30
                            }
                        }/>
                    </Link>
                </Fullpage>
                <Element name="about" className="element">
                </Element>
            </div>
        )
    }
}

export default TitlesAndIcons;