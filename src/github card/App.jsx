import React, { createRef } from 'react';
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];


class FormComponent extends React.Component{
     state ={
        usernameInput: ""
     }
      handleSumbit =  (event)=>{
            event.preventDefault();
            const res = fetch(`https://api.github.com/users/${this.state.usernameInput}`).then((response)=>{
                 console.log(response.json());
                 if(!response.ok){
                    console.log('errorrr')
                 }
            });
           
        }
    render(){
        return(
            <div>
                <form action="" onSubmit={ this.handleSumbit}>
                    <input type="text" placeholder='search for github profile' value={this.state.usernameInput} onChange={event => this.setState({usernameInput: event.target.value})} />
                    <button>Add User</button>
                </form>
            </div>
        )
    }
}
class Card extends React.Component{
     profile = this.props;
    render(){
        return(
        <div className='github-profile'>
            <img src={this.profile.avatar_url} alt="no image" />
            <div className='info'>
        <div className='name'>  {this.profile.name}  </div>
                <div className='company'>{this.profile.company}</div>

            </div>
        </div>
    )
    }
}

const CardList = (props)=>{
    return <div>
     {props.profiles.map(profile=> <Card key={profile.id} {...profile}/>)}
    </div>
}

class AppGithub extends React.Component{
    state ={
        profiles: testData
    }
    render(){
        
        return (
            <div>
                <div className="header">  {this.props.title} </div>
                <FormComponent />
                <CardList profiles={this.state.profiles} />
            </div>
         
           
        )
    }
}


export default AppGithub