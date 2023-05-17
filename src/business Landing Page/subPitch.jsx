import React from 'react';
import styles from './business.css';

export function Partials(props){
    return(
        <div className="sub-texts">
           <div>
            <p>{props.text1}</p>
            {props.children}
           </div>
            

        </div>
    )
}

