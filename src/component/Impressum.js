import React, { Component } from 'react';
class Impressum extends Component {
    state = {}
    render() {
        return (
            <div className='impressum'>
                <h1>Achtung Waschbär</h1>
                <p>Was Waschbäre alles anstellen, um an Fressen zu gelangen.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nx_Sm8qkj2g?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>

        );
    }
}

export default Impressum;