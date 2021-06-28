import React, { Component } from "react";
import searchIcon from '../img/searchIcon.svg';
import Select from 'react-select';
import getString from '../data/strings';
import { Link } from "react-router-dom";


class Header extends Component {

    options = [
        { value: 'en', label: 'en' },
        { value: 'de', label: 'de' }
    ]
    customLangStyle = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 10,
        })
    }

    state = {
        lang: localStorage.getItem('preferredLanguage')
    }


    changeSearchInput = (searchValue) => {
        this.props.setSearch(searchValue)
    }

    handleLangChange = (langInput) => {
        this.props.setLang(langInput)
    }


    render() {
        return (
            <header>
                <Link to='/'>
                    <h1><span>.</span>MOV</h1>
                </Link>
                <div className='search-box'>
                    <div className='search-icon-box'><img src={searchIcon} alt="a search icon"></img></div>
                    <input type="text" placeholder={getString('searchPlaceholder')} onChange={(e) => this.changeSearchInput(e.target.value)}></input>
                </div>
                <Select className="langSelect" options={this.options} styles={this.customLangStyle} placeholder={this.state.lang} onChange={(e) => this.handleLangChange(e)} />
            </header>
        );
    }
}

export default Header;