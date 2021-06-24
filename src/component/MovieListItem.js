import React, { Component } from 'react';
import apiKey from '../data/apiKey';

class MovieListItem extends Component {

    state = {

    }


    componentDidMount() {

    }



    render() {
        return (
            <div className="movieItem">
                <img src={`http://image.tmdb.org/t/p/w200/` + this.props.img} alt="" />
                {this.props.name}
            </div>
        );
    }
}

export default MovieListItem;