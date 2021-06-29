import React, { Component } from 'react';
import getString from '../data/strings';
import { Link } from "react-router-dom";

class Footer extends Component {

    state = {

    }

    render() {
        return (
            <footer className="foot-style">
                <Link to='/'>
                    <h1><span className="dot">.</span>MOV</h1>
                </Link>
                {/* <h1><span className="dot">. </span>MOV</h1> */}
                <Link to='/impressum'>
                    <p>{getString('footerImprint')}</p>
                </Link>
                <div className="socialmedia-icon">
                    <a href="instagram"><img src="./img/instagram.png" alt="" /></a>
                    <a href="facebook"><img src="./img/facebook.png" alt="" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;