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
                <h1>Popular movies</h1>
                <div className="body-movies">
                {this.state.popularMovies.map(movie => {
                    return <Link to={`/${movie.id}`}>
                        <MovieListItem key={movie.id} 
                                       img={movie.poster_path} 
                                       name={movie.title}
                                       vote={movie.vote_average}
                                       release={movie.release_date}
                                       genre={movie.genre_ids} />
                    </Link>
                })}
                </div>
            </main>
        );
    }
}

export default Main;