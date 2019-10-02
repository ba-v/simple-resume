import React, {Component} from 'react';
import './Menu.css';
import {Link, Element} from 'react-scroll';
import data from "../data.json";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
                      onSetActive={this.handleSetActive}>
                    <div className="menuparts">{data.menu.item1}</div>
                </Link>
                <Element name="about" className="element">
                </Element>
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500}
                      onSetActive={this.handleSetActive}>
                    <div className="menuparts">{data.menu.item2}</div>
                </Link>
                <Element name="skill" className="element">
                </Element>
            </div>
        )
    }
}

export default Menu;