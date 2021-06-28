import React, { Component } from "react";
import searchIcon from '../img/searchIcon.svg';
import Select from 'react-select';
import getString from '../data/strings';
import { Link } from "react-router-dom";
import germanImg from '../img/german.png'


class Header extends Component {

    options = [
        { value: 'en', label: 'en' },
        { value: 'de', label: ' 😂 ' }
    ]
    customLangStyle = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted black',
           /*  color: state.isSelected ? 'red' : 'blue', */
            /* color: '#21E18C', */
            padding: 10,
            background: '#24323F',
            outlineStyle: 'none',
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
        console.log(this.customLangStyle)
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