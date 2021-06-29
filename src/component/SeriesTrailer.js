import React, { Component } from 'react';
import apiKey from '../data/apiKey';
import NoVideo from '../img/NoVideo.png';
import Error404 from './Error404';
import getString from '../data/strings'
class SeriesTrailer extends Component {
    state = {
        video_trailers: [],
        lang: localStorage.getItem("preferredLanguage")
        // video_keys: [],
        // chosen_key: '4J1PN5HfU4Q'
    }

    async componentDidMount() {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${this.props.movie_id}/videos?api_key=${apiKey}&language=${this.state.lang}`)
        const json = await response.json()
        if (json !== undefined && this.state.video_trailers !== undefined) {
            this.setState({ video_trailers: json.results });

            //console.log(json.results)

            // const arr = this.state.video_trailers.map((obj) => {
            //     return obj.key;
            // });
            //console.log(arr)

            // this.setState({ video_keys: arr });
            // console.log(this.state.video_keys)

            // this.setState({ chosen_key: this.state.video_keys[0] });
            // console.log(this.state.chosen_key)
        }
    }


    render() {
        return (
            this.state.video_trailers === undefined ? <Error404></Error404> :
                this.state.video_trailers.length !== 0 ?
                    <article className='all_videos'>
                        {
                            this.state.video_trailers.map(trailerInfo => {
                                return (<div className='video-box' key={trailerInfo.id}>
                                    <iframe width="300" src={`https://www.youtube.com/embed/${trailerInfo.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>)
                            })
                        }
                    </article> :
                    <article className='all_videos'>
                        <div className='video-box'>
                            {getString('noTrailerFound')}
                            {/* <img src={NoVideo} alt='NoVideoFound'></img> */}
                        </div>
                    </article>
        );
    }
}

export default SeriesTrailer;