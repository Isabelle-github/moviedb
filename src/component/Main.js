import React, { Component } from "react";
import apiKey from "../data/apiKey";
import MovieListItem from "./MovieListItem";

import {
    Link
} from "react-router-dom";

import getString from '../data/strings'

class Main extends Component {

    state = {
        popularMovies: [],
        genreList: [],
        lang: localStorage.getItem('preferredLanguage')
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${this.state.lang}`)
        const json = await response.json()
        // console.log(json)
        this.setState({ popularMovies: json.results });

        const response2 = await fetch(`https://api.themoviedb.org/3/genre/list?api_key=${apiKey}`)
        const json2 = await response2.json()
        this.setState({ genreList: json2.genres });
        // console.log(this.state.genreList)
    }

    render() {
        return (
            <main>
                <h1>{getString('popularTitle')}</h1>
                <div className="body-movies">
                    {this.state.popularMovies.filter(movie => movie.title.includes(this.props.searchInput)).map(movie => {
                        let newGenreListForMovie = []
                        this.state.genreList.forEach(genreId => {
                            // console.log("genreID from List")
                            // console.log(genreId)
                            movie.genre_ids.forEach(id => {
                                // console.log("movie id for each")
                                // console.log(`before possible hit id:${id} genreId:${genreId}`)
                                if (genreId.id === id) {
                                    // console.log("hit")
                                    newGenreListForMovie.push(genreId.name)
                                }
                            })
                        })
                        // console.log(newGenreListForMovie)


                        return <Link key={movie.id} to={`/${movie.id}`}>
                            <MovieListItem key={movie.id}
                                img={movie.poster_path}
                                name={movie.title}
                                vote={movie.vote_average}
                                release={movie.release_date}
                                genre={newGenreListForMovie} />
                        </Link>
                    })}
                </div>
            </main>
        );
    }
}

export default Main;