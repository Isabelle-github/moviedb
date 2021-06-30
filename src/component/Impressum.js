import React, { Component } from 'react';
import getString from '../data/strings';
import kaching from '../img/kaching.png'
class Impressum extends Component {
    state = {}
    render() {
        return (
            <div className='impressum'>
                <h1>{getString('impressumTitle')} <br></br><span className="animationR">R </span><span className="animationA">A </span><span className="animationC">C </span><span className="animationC2">C </span><span className="animationO">O </span><span className="animationO2">O </span><span className="animationN">N </span> !</h1>
                <p>{getString('impressumText')}</p>
                <div className="finger"> 👇🏼 </div>
                <div className="raccoon-side"> 🦝 </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nx_Sm8qkj2g?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                <div className="raccoon-side2"> 🦝 </div>
                <section className="rac-animation">
                    <div className="raccoon"> 🦝 </div>
                    <img src={kaching} alt="#kaching-raccoon" className="raccoon-kaching"/>
                </section>
                
            </div>

        );
    }
}

export default Impressum;