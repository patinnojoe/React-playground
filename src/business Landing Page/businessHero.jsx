import React from  'react' ;
import styles from './business.css';
import heroImage from '../business.jpg';

export function HeroSection(){
    return (
        <div className='hero'>
            <img src={heroImage} alt="" />
            <p>Title</p>

        </div>
    )
}