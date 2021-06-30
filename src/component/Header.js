import React, { Component } from "react";
import searchIcon from '../img/searchIcon.svg';
import Select from 'react-select';
import getString from '../data/strings';
import { Link } from "react-router-dom";
import germanImg from '../img/german.png';
import englandImg from '../img/england.png';
import russiaImg from '../img/russia.png';
import franceImg from '../img/france.png';
import netherlandImg from '../img/netherlands.png';
/* import Control from "react-select/src/components/Control"; */


class Header extends Component {

    options = [
        {
            value: 'en', label: <div className="icon-language">
                <img src={englandImg} height="25px" width="30px" alt="#english" />English</div>
        },
        {
            value: 'de', label: <div className="icon-language">
                <img src={germanImg} height="20px" width="30px" alt="#german" />Deutsch</div>
        },
        {
            value: 'ru', label: <div className="icon-language">
                <img src={russiaImg} height="25px" width="30px" alt="#russian" />Русский</div>
        },
        {
            value: 'fr', label: <div className="icon-language">
                <img src={franceImg} height="25px" width="30px" alt="#french" />Français</div>
        },
        {
            value: 'nl', label: <div className="icon-language">
                <img src={netherlandImg} height="25px" width="30px" alt="#netherlands" />Nederlands</div>
        }
    ]

    customLangStyle = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted #ffffff',
            padding: 5,
            margin: 0,
           /*  background: state.isSelected ? '#24323F' : '#384a5c', */
            background: state.isFocused ? '#384a5c' : '#24323F',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
            /*   ...provided,
              background: state.isSelected ? '#384a5c' : '#384a5c', */
        },
        menu: (provided, state) => ({
            ...provided,
            padding: 5,
            background: '#24323F',
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
        }),
        control: (provided, state) => ({
            ...provided,
            background: state.isSelected ? '#24323F' : '#24323F',
            border: '1px solid #21E18C',
        }),
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
                    <h1><span id="point">.</span>MOV</h1>
                </Link>
                <div className='search-box'>
                    <div className='search-icon-box'><img src={searchIcon} alt="a search icon"></img></div>
                    <input
                        type="text"
                        placeholder={getString('searchPlaceholder')}
                        onChange={(e) => this.changeSearchInput(e.target.value)}>
                    </input>
                </div>
                <Select
                    className="langSelect"
                    options={this.options}
                    styles={this.customLangStyle}
                    placeholder={this.state.lang}
                    onChange={(e) => this.handleLangChange(e)}
                />
            </header>
        );
    }
}

export default Header;