import React, { Component } from 'react';
import getString from '../data/strings';
class Impressum extends Component {
    state = {}
    render() {
        return (
            <div className='impressum'>
                <h1>{getString('impressumTitle')}</h1>
                <p>{getString('impressumText')}</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nx_Sm8qkj2g?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>

        );
    }
}

export default Impressum;