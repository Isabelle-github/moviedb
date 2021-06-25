import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import Footer from './Footer';
import Header from './Header';
import Trailer from './Trailer';


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
            <div className='movie_Details'>
                <Header></Header>
                <h1 className='detail_title'>{this.state.data.title}</h1>
                <div className='contain_details'>

                    <div className='box_left'>

                        <img src={`https://image.tmdb.org/t/p/w400/` + this.state.data.poster_path} alt='poster'></img>
                    </div>
                    <div className='box_right'>
                        <div className='detail_grid'>
                            <h2>Release Date</h2>
                            <p>{this.state.data.release_date}</p>
                            <h2>Genres</h2>
                            <p>Action, Thriller, Romance, Horror</p>
                            {/* <p>
                        {this.state.data.genres.map(mov_genre => {
                            return <span key={mov_genre.id}>{mov_genre.name}, </span>
                        })}
                    </p> */}
                            <h2>Overview</h2>
                            <p>{this.state.data.overview}</p>
                            <h2>Average Voting</h2>
                            <p>{this.state.data.vote_average}</p>
                        </div>
                        <div >
                            <h2>Watch Trailer</h2>
                            <Trailer movie_id={this.props.match.params.id} imgSrc={this.state.data.poster_path}></Trailer>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default MovieDetail;