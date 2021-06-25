import React, { Component } from "react";
import searchIcon from '../img/searchIcon.png';
class Header extends Component {

    state = {

    }

    changeSearchInput = (searchValue) => {
        this.props.setSearch(searchValue)
    }

    render() {
        return (
            <header>
                <h1> <span>.</span>MOV</h1>
                <div className='search-box'>
                    <div className='search-icon-box'><img src={searchIcon}></img></div>
                    <input type="text" placeholder="Search Something" onChange={(e) => this.changeSearchInput(e.target.value)}></input>
                </div>
                <a href="#addmovie">Add movies</a>
            </header>
        );
    }
}

export default Header;