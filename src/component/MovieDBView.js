import React, { Component } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer'

class MovieDBView extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <Header ></Header>
                <Main ></Main>
                <Footer></Footer>
            </div>
        );
    }
}

export default MovieDBView;