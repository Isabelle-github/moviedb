import React, { Component } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Nav from "./Nav";
import Error404 from "./Error404";
import PopularSeries from "./PopularSeries";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieDetail from './MovieDetail';
import SeriesDetail from './SeriesDetail';

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
                <Nav></Nav>
                <Switch>
                    <Route path="/" exact>
                        <Main searchInput={this.state.searchInput}></Main>
                    </Route>
                    <Route path="/series" exact>
                        <PopularSeries searchInput={this.state.searchInput}></PopularSeries>
                    </Route>
                    <Route path="/movie/detail/:id" component={MovieDetail} exact>
                    </Route>
                    <Route path="/series/detail/:id" component={SeriesDetail} exact>
                    </Route>
                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        );
    }
}

export default MovieDBView;