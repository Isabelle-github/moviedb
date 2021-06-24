import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import Footer from './Footer';
import Header from './Header';


class MovieDetail extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}`)
        const json = await response.json()
        console.log(json)
        this.setState({ data: json });
    }

    render() {
        return (
            <div>
                <Header></Header>
                TEst
                {this.state.data.budget}
                <Footer></Footer>
            </div>
        );
    }
}

export default MovieDetail;