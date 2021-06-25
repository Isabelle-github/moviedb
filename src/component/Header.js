import React, { Component } from "react";
import searchIcon from '../img/searchIcon1.svg';
class Header extends Component {

    state = {}

    render() {
        return (
            <header>
                <h1> <span>.</span>MOV</h1>
                <div className='search-box'>
                    <div className='search-icon-box'>
                        <img src={searchIcon} alt='search_icon'></img>
                    </div>
                    <input type="text" placeholder="Search something here"></input>
                </div>
                <a href="#addmovie">Add movies</a>
            </header>
        );
    }
}

export default Header;