import React from 'react';
import './about.css'
import nin from '../../assets/nins.jpg'
/* import rainbow from '../../assets/rainbow.png'*/
import {Link} from 'react-router-dom'

export default function About(){

    return (
        <div className='about-container'>
            <div className='left'>
                <h1>My first React Project</h1>
                <h3>Made with love for my Henry class so I hope you enjoy it!</h3>
                <Link to='/'><span className='btn-return'>Return!</span></Link>
            </div>
            <div className='right'>
                <img src={nin} alt='NiN'/>
            </div>
        </div>
    );

}