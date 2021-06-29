import React, { Component } from 'react';
// import apiKey from "../data/apiKey";
//import TransformText from "./TransformText";

class MovieListItem extends Component {

    state = {
        /* year: this.props.release, */
        genres: []
    }


    componentDidMount() {
        // console.log(this.props.genre)
    }

    render() {
        return (
            <div className="movieItem">
                <figcaption className="img-body">
                    <img src={`http://image.tmdb.org/t/p/w200/` + this.props.img} alt="" />
                    <p className="vote">{this.props.vote}</p>
                </figcaption>
                <p className="release-genre">
                    <span>{this.props.release} — </span>
                    {this.props.genre.map((genre, i) => {
                        if (i === this.props.genre.length - 1) {
                            return <span key={i}>{genre}</span>
                        } else {
                            return <span key={i}>{genre}, </span>
                        }
                    })}
                </p>
                <h3 className="name">{this.props.name}</h3>
            </div>
        );
    }
}

export default MovieListItem;