import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Button(props){
    const handleClick = ()=>props.incrementCounter(props.incrementVal)
    return(
         <button onClick={handleClick}>
            +{props.incrementVal}
        </button>
    )
}

function Display(props){
    return <div>{props.message}</div>
}
function AppReturn(){
    const [counter, setCounter] = useState(0);
     const handleClick= (val)=>setCounter(counter+val);

     return (
          <React.Fragment>
        <Button incrementCounter ={handleClick} counter={counter} incrementVal ={5} />
         <Button incrementCounter ={handleClick} counter={counter} incrementVal ={2} />
          <Button incrementCounter ={handleClick} counter={counter} incrementVal ={3} />
        <Display message={counter} />
    </React.Fragment>
     )

}


export default AppReturn