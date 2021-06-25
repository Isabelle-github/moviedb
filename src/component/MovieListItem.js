import React, { Component } from 'react';
// import apiKey from '../data/apiKey';

class MovieListItem extends Component {

    state = {

    }


    componentDidMount() {

    }



    render() {
        return (
            <div className="movieItem">
                <img src={`http://image.tmdb.org/t/p/w200/` + this.props.img} alt="" />
                <p className="vote">{this.props.vote}</p>
                <p className="release-genre">{this.props.release}- <span>{this.props.genre}</span></p>
                <h3 className="name">{this.props.name}</h3>
            </div>
        );
    }
}

export default MovieListItem;