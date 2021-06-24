import React, { Component } from "react";
import apiKey from "../data/apiKey";
import MovieListItem from "./MovieListItem";

import {
    Link
} from "react-router-dom";

class Main extends Component {

    state = {
        popularMovies: []
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const json = await response.json()
        console.log(json)
        this.setState({ popularMovies: json.results });
    }

    render() {
        return (
            <main>
                {this.state.popularMovies.map(movie => {
                    return <Link to={`/${movie.id}`}>
                        <MovieListItem key={movie.id} img={movie.poster_path} name={movie.title} />
                    </Link>
                })}
            </main>
        );
    }
}

export default Main;