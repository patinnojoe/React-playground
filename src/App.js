import React from 'react';

import logo from './logo.svg';
import './App.css';
import AppReturn from './button';
import AppGithub from './github card/App';
import Person from './Person/Person';
import { StaticPage } from './static website';
import { BusinessPage } from './business Landing Page';


class App extends React.Component {
  state = {
     people:[
    {name: "Cathereine", age:21, height:5.2},
    {name: "Patrick", age:6, height:4},
    {name:"Tochi", age:26, height:6.2}
   ]
  }
  switchNameHandler = (newName)=>{
    this.setState({
      people:[
         {name: newName, age:21, height:5.2},
    {name: "Patrick JOJo", age:22, height:6.7},
    {name:"Tochi", age:26, height:6.2}

      ]
    })
  }
  handleInput = (newInput)=>{
    this.setState({
       people:[
    {name: newInput.target.value, age:21, height:5.2},
    {name: "Patrick JOJo", age:22, height:6.7},
    {name:"Tochi", age:26, height:6.2}

      ]
      
      
    })

  }
  render(){
    const style ={
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: "6px",
      padding: "16px",
      border: 'none',
      outline:'none',
      cursor:'pointer'
    }
    const App = (
       <div className="App">
      <AppGithub title ="This is my Github header" />
      <button onClick={this.switchNameHandler.bind(this, 'Princess')} style={style}>Switch Name</button>
      <Person name={this.state.people[0].name} age={this.state.people[0].age} height={this.state.people[0].height} click={()=>this.switchNameHandler('Cathy babby!!')} handleInput={this.handleInput} />
       <Person name={this.state.people[1].name} age={this.state.people[1].age} height={this.state.people[1].height} />
       <Person name={this.state.people[2].name} age={this.state.people[2].age} height={this.state.people[2].height} />
      {/* <AppReturn /> */}
  
    </div>
    )
    return(
      App
    
    )
  }
}
export default App 


export function StaticWbApp(){
  return (
    <div>
      <StaticPage />
    </div>
  )
}

// business web page

export function StaticBusinessWeb(){
  return (
   <div>
     <BusinessPage />
   </div>
  )
}


