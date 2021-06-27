import React, { Component } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieDetail from './MovieDetail';

class MovieDBView extends Component {

    state = {
        searchInput: ""
    }

    setSearchInput = (searchInput) => {
        this.setState({ searchInput: searchInput });
    }

    setLanguage = (lang) => {
        localStorage.setItem("preferredLanguage", lang.value)
        window.location.reload()
    }

    render() {
        return (
            <Router>
                <Header setSearch={(input) => this.setSearchInput(input)} setLang={(lang) => this.setLanguage(lang)}></Header>
                <Switch>
                    <Route path="/" exact>
                        <Main searchInput={this.state.searchInput}></Main>
                    </Route>
                    <Route path="/:id" component={MovieDetail}>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        );
    }
}

export default MovieDBView;