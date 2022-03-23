import React from 'react';
import './splash.css'
import sun from '../../assets/sun.png'

export default function Splash(){
    return(
        <div className='welcome'>
            <div className='splash-title'>
            <img className='sun' src={sun} alt='sun'/>
            <h1 className='splash-title'>HELLO!</h1>
            </div>
            <div className='splash-text'>
            <p>Welcome to Weatherly,
            <br/>
            Feel free to look for the weather!</p>
            </div>
        </div>
    )
} 