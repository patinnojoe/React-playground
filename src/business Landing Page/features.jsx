import React from 'react';

export  function Features(props){
    return(
            <div className='features'>
                <img src="{props.featureImg}" alt="" />
                <h3 className='feature-header'>{props.featureHeader}</h3>
                <p className='feature-descrption'>{props.featureDesc}</p>
                  <button>Patronise</button>
            </div>
    )
}