import React from 'react';
import './person.css';

const Person = (props) =>{
    return(
        <div className='person-card'>
            <p onClick={props.click} >I am {props.name} and I am {props.age} years old with an average height of {props.height}</p>
            <input type='text' onChange={props.handleInput} value={props.name}/>
        </div>
    )
}

export default Person;