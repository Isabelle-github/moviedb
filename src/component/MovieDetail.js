import React, { Component } from 'react';
import apiKey from '../data/apiKey';
// import Footer from './Footer';
// import Header from './Header';
import Trailer from './Trailer';
import getString from '../data/strings';
import Nav from "./Nav";
import Error404 from './Error404';


class MovieDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            genres: [],
            trailer: [],
            lang: localStorage.getItem("preferredLanguage") ? localStorage.getItem("preferredLanguage") : "de"
        }

        console.log(localStorage.getItem("preferredLanguage"))
    }


    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=${this.state.lang}`)
        if (response.status === 200) {
            const json = await response.json()
            this.setState({ data: json });
            this.setState({ genres: json.genres });
        } else if (response.status === 404) {
            console.log("404")
            this.setState({ data: [] });
        } else {
            console.log("other")
        }
    }

    componentDidUpdate() {
        // console.log(this.props.from)
    }

    render() {
        return (
            this.state.data.length < 1 ?
                <div>
                    <Nav></Nav>
                    <Error404></Error404>
                </div>
                :
                <div className='movie_Details'>
                    <Nav></Nav>

                    <h1 className='detail_title'>{this.state.data.title}</h1>
                    <div className='contain_details'>

                        <div className='box_left'>

                            <img src={`https://image.tmdb.org/t/p/original/` + this.state.data.poster_path} alt='poster'></img>
                        </div>

                        <div className='detail_grid box_right'>
                            <h2>{getString('movieDetailRelease')}</h2>
                            <p>{this.state.data.release_date}</p>
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
                    <div className='contain-videos'>
                        <h2>{getString('movieDetailTrailer')}</h2>
                        <Trailer movie_id={this.props.match.params.id} imgSrc={this.state.data.poster_path}></Trailer>
                    </div>

                </div>
        );
    }
}

export default MovieDetail;