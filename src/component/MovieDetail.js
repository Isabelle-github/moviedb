import React, { Component } from 'react';

class MovieDetail extends Component {

    state = {}

    render() {
        return (
            <div>
                MOVIEDETAIL
                {this.props.match.params.id}
            </div>
        );
    }
}

export default MovieDetail;