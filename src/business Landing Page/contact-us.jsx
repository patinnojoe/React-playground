import React from 'react';
import styles from './business.css';

export function ContactUs(props){
    return (
        <div className="contact-us">
            <h3> Contact us</h3>
            <div className='social-media-icons'>{props.children}</div>


        </div>
    )
}