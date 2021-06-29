import React, { Component } from 'react';
import apiKey from "../data/apiKey";
import MovieListItem from "./MovieListItem";
import getString from '../data/strings';


import {
    Link
} from "react-router-dom";

class PopularSeries extends Component {

    state = {
        popularSeries: [],
        genreList: [],
        lang: localStorage.getItem('preferredLanguage')
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${this.state.lang}`)
        const json = await response.json()
        console.log(json)
        this.setState({ popularSeries: json.results });

        const response2 = await fetch(`https://api.themoviedb.org/3/genre/list?api_key=${apiKey}`)
        const json2 = await response2.json()
        this.setState({ genreList: json2.genres });
        // console.log(this.state.genreList)
    }

    render() {
        let foundSeries = this.state.popularSeries.filter(series => series.name.toLowerCase().includes(this.props.searchInput.toLowerCase()));
        //console.log(foundSeries);
        return (
            <main>
                <h1>{getString('popularSeriesTitle')}</h1>
                <div className="body-movies">

                    {(foundSeries.length !== 0 ? foundSeries.map(series => {
                        let newGenreListForSeries = []
                        this.state.genreList.forEach(genreId => {
                            // console.log("genreID from List")
                            // console.log(genreId)
                            series.genre_ids.forEach(id => {
                                // console.log("movie id for each")
                                // console.log(`before possible hit id:${id} genreId:${genreId}`)
                                if (genreId.id === id) {
                                    // console.log("hit")
                                    newGenreListForSeries.push(genreId.name)
                                }
                            })
                        })
                        // console.log(newGenreListForMovie)

                        let releaseYear = series.first_air_date
                        if (typeof releaseYear === 'string') {
                            releaseYear = releaseYear.substr(0, 4)
                            console.log(releaseYear)
                        }

                        return <Link key={series.id} to={`/detail/${series.id}`}>
                            <MovieListItem key={series.id}
                                img={series.poster_path}
                                name={series.name}
                                vote={series.vote_average}
                                release={releaseYear}
                                genre={newGenreListForSeries} />
                        </Link>
                    }) :
                        <div className='body-found-movies'>
                            <h2>{getString('popularSeriesNotFoundText')}</h2>
                            <div className="body-movies">
                                {
                                    this.state.popularSeries.map(series => {
                                        let newGenreListForSeries = []
                                        this.state.genreList.forEach(genreId => {
                                            // console.log("genreID from List")
                                            // console.log(genreId)
                                            series.genre_ids.forEach(id => {
                                                // console.log("movie id for each")
                                                // console.log(`before possible hit id:${id} genreId:${genreId}`)
                                                if (genreId.id === id) {
                                                    // console.log("hit")
                                                    newGenreListForSeries.push(genreId.name)
                                                }
                                            })
                                        })
                                        // console.log(newGenreListForMovie)

                                        let releaseYear = series.first_air_date
                                        if (typeof releaseYear === 'string') {
                                            releaseYear = releaseYear.substr(0, 4)
                                            console.log(releaseYear)
                                        }

                                        return <Link key={series.id} to={`/detail/${series.id}`}>
                                            <MovieListItem key={series.id}
                                                img={series.poster_path}
                                                name={series.name}
                                                vote={series.vote_average}
                                                release={releaseYear}
                                                genre={newGenreListForSeries} />
                                        </Link>
                                    })
                                }
                            </div>
                        </div>)}
                </div>
            </main>
        );
    }
}

export default PopularSeries;