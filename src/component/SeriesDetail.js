import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import SeriesTrailer from './SeriesTrailer';
import getString from '../data/strings';
import Nav from "./Nav";
import Error404 from './Error404';

class SeriesDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            genres: [],
            isLoaded: false,
            lang: localStorage.getItem("preferredLanguage") ? localStorage.getItem("preferredLanguage") : "de"
        }

        console.log(localStorage.getItem("preferredLanguage"))
    }


    async componentDidMount() {
        console.log(this.props.from)
        const response = await fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${apiKey}&language=${this.state.lang}`)
        const json = await response.json()
        this.setState({ data: json });
        this.setState({ genres: json.genres });
        // console.log(this.state.genres)

        this.setState({ isLoaded: true });
    }

    componentDidUpdate() {
        console.log(this.props.from)
    }

    render() {
        return (
            this.state.isLoaded ?
                this.state.data.length < 1 || this.state.data.genres === undefined ?
                    <div>
                        <Nav></Nav>
                        <Error404></Error404>
                    </div>
                    :
                    <div className='movie_Details'>
                        <Nav></Nav>
                        <h1 className='detail_title'>{this.state.data.name}</h1>
                        <div className='contain_details'>

                            <div className='box_left'>

                                <img src={`https://image.tmdb.org/t/p/original/` + this.state.data.poster_path} alt='poster'></img>
                            </div>

                            <div className='detail_grid box_right'>
                                <h2>{getString('movieDetailRelease')}</h2>
                                <p>{this.state.data.first_air_date}</p>
                                <h2>{getString('movieDetailGenre')}</h2>
                                <p>{this.state.genres.map((genre, i) => {
                                    if (i === this.state.genres.length - 1) {
                                        return <span key={i}>{genre.name}</span>
                                    } else {
                                        return <span key={i}>{genre.name}, </span>
                                    }
                                })}</p>
                                <h2>{getString('movieDetailOverview')}</h2>
                                <p>{this.state.data.overview}</p>
                                <h2>{getString('movieDetailVoting')}</h2>
                                <p>{this.state.data.vote_average}</p>
                            </div>
                        </div>
                        <div>
                            <h2>{getString('movieDetailTrailer')}</h2>
                            <SeriesTrailer movie_id={this.props.match.params.id} imgSrc={this.state.data.poster_path}></SeriesTrailer>
                        </div>

                    </div> : <div className='movie_Details'>Loading</div>
        );
    }
}

export default SeriesDetail;