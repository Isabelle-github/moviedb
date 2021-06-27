import React, { Component } from 'react';
import apiKey from '../data/apiKey'
class Trailer extends Component {
    state = {
        video_trailers: [],
        video_keys: [],
        chosen_key: '4J1PN5HfU4Q'
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.movie_id}/videos?api_key=${apiKey}`)
        const json = await response.json()
        console.log(json)
        if (json !== undefined) {
            this.setState({ video_trailers: json.results });
            console.log(json.results)

            const arr = this.state.video_trailers.map((obj) => {
                return obj.key;
            });
            console.log(arr)

            this.setState({ video_keys: arr });
            console.log(this.state.video_keys)

            this.setState({ chosen_key: this.state.video_keys[0] });
            console.log(this.state.chosen_key)
        }
    }


    render() {
        return (

            // {this.state.popularMovies.filter(movie => movie.title.includes(this.props.searchInput)).map(movie => {
            //     return <Link key={movie.id} to={`/${movie.id}`}>
            //         <MovieListItem key={movie.id}
            //             img={movie.poster_path}
            //             name={movie.title}
            //             vote={movie.vote_average}
            //             release={movie.release_date}
            //             genre={movie.genre_ids} />
            //     </Link>
            // })}
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.chosen_key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            // <a href={`https://www.youtube.com/watch?v=${this.state.chosen_key}`}>
            //     <img src={`https://image.tmdb.org/t/p/w200/` + this.props.imgSrc} alt='videotrailer' width="400" height="300"></img>
            // </a>
        );
    }
}

export default Trailer;