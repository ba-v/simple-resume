import React, {Component} from 'react';
import './Fullpage.css';
import SnowStorm from 'react-snowstorm';

class Fullpage extends Component {

    render() {
        const {children} = this.props;
        return (
            <div
                className={`fullpage ${this.props.className}`}>
                <SnowStorm/>
                {children}
            </div>
        )
    }
}

export default Fullpage;