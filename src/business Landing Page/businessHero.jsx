import React from  'react' ;
import styles from './business.css';
import heroImage from '../business.jpg';

export function HeroSection(props){
    return (
        <section className='hero'>
            <div className='background-image'></div>
            <div className='overlay'>
                 <div className='hero-content'>
                    <p className='title'>{props.title}</p>
                    <a href='#' className='cta-btn'>{props.cta}</a>
                    <p className='typewriter-text-1'>{props.typeWriterText1}</p>
                    <p className='typewriter-text-2'>{props.typeWriterText2}</p>
                     
                 </div>

            </div>
         
        

        </section>
    )
}