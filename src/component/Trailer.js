import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import NoVideo from '../img/NoVideo.png';
class Trailer extends Component {
    state = {
        video_trailers: [],
        // video_keys: [],
        // chosen_key: '4J1PN5HfU4Q'
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.movie_id}/videos?api_key=${apiKey}`)
        const json = await response.json()
        // console.log(json)
        if (json !== undefined) {
            this.setState({ video_trailers: json.results });
            //console.log(json.results)

            const arr = this.state.video_trailers.map((obj) => {
                return obj.key;
            });
            //console.log(arr)

            // this.setState({ video_keys: arr });
            // console.log(this.state.video_keys)

            // this.setState({ chosen_key: this.state.video_keys[0] });
            // console.log(this.state.chosen_key)
        }
    }


    render() {
        return (this.state.video_trailers.length !== 0 ?
            <article className='all_videos'>
                {
                    this.state.video_trailers.map(trailerInfo => {
                        return (<div key={trailerInfo.id}>
                            <iframe width="400" height="300" src={`https://www.youtube.com/embed/${trailerInfo.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>)
                    })
                }
            </article> : <article className='all_videos'>
                <img src={NoVideo} alt='NoVideoFound'></img>
            </article>

        );
    }
}

export default Trailer;