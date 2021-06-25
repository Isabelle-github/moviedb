import React, { Component } from "react";
import apiKey from "../data/apiKey";
import MovieListItem from "./MovieListItem";

import {
    Link
} from "react-router-dom";

class Main extends Component {

    state = {
        popularMovies: [],
        genres: []
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const json = await response.json()
        console.log(json)
        this.setState({ popularMovies: json.results });
        
        const response2 = await fetch(`https://api.themoviedb.org/3/genre/list?api_key=${apiKey}`)
        const json2 = await response2.json()
        console.log(json2)
        this.setState({ genres: json2.genres });
        console.log(this.state.genres)
    }
  
    render() {
        return (
            <main>
                <h1>Popular movies</h1>
                <div className="body-movies">
                    {this.state.popularMovies.filter(movie => movie.title.includes(this.props.searchInput)).map(movie => {
                        return <Link key={movie.id} to={`/${movie.id}`}>
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