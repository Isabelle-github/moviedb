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

    render() {
        return (
            <Router>
                <Header setSearch={(input) => this.setSearchInput(input)}></Header>
                {/* <Main ></Main> */}
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