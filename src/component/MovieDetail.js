import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import Footer from './Footer';
import Header from './Header';


class MovieDetail extends Component {

    state = {
        data: [],
        selected_Movie: {},
        movie_id: this.props.match.params.id
    }

    async componentDidMount() {

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const json = await response.json()
        console.log(json)
        console.log(json.results)
        this.setState({ data: json.results });
        // this.setState({selected_Movie: this.state.data})
    }

    render() {
        return (
            <div>
                <Header></Header>
                MOVIEDETAIL

                {this.props.match.params.id}
                <Footer></Footer>
            </div>
        );
    }
}

export default MovieDetail;