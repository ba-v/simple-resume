import React, {Component} from 'react';
import TitlesAndIcons from '../sections/TitlesAndIcons'
import About from '../sections/About'
import Skill from '../sections/Skill'
import data from "../data.json";
import './TotalPage.css';
import Menu from "../components/Menu";

let themenumber = 0;

class TotalPage extends Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: '#d6dbdf',
            color: '#212f3c'
        }
        this.changer = this.changer.bind(this)
    }


    changer() {
        this.setState({
            color: data.theme[themenumber].color,
            backgroundColor: data.theme[themenumber].backgroundcolor
        });
        if (themenumber < data.theme.length - 1)
            themenumber++;
        else
            themenumber = 0;
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="menuparts-left"
                         onMouseDown={this.changer}
                    >
                        {<img id="theme" src={data.menu.item0} alt="color"/>}</div>
                    <Menu/>
                </div>
                <div style={{backgroundColor: this.state.backgroundColor, color: this.state.color}}>
                    <TitlesAndIcons/>
                    <About/>
                    <Skill/>
                </div>
            </div>
        )
    }
}

export default TotalPage;

