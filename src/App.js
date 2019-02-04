import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    dogs: [
      { name: 'Veda', color: 'pink' },
      { name: 'Scranton', color: 'orange'}
    ],
    username: 'Example User'
  }

  nicknameHandler = (nicknames) => {
    this.setState( {
      dogs: [
        { name: nicknames[0], color: 'pink' },
        { name: nicknames[1], color: 'orange'}
      ]
    })
  }

  usernameChanged = (event) => {
    this.setState( {
      dogs: [
        { name: 'Veda', color: 'pink' },
        { name: 'Scranton', color: 'orange'}
      ],
      username: event.target.value
    })
  }

  render() {
    const style = {
    	backgroundColor: 'transparent',
    	borderRadius: '6px',
    	border: '1px solid #e65f44',
    	cursor: 'pointer',
    	color: '#c92200',
    	fontSize: '15px',
    	fontWeight: 'bold',
    	padding: '6px 24px',
    	textDecoration: 'none',
    	textShadow: '0px 1px 0px #ded17c'
    }

    return (
      <div className="App">
        <UserInput
          username= { this.state.username }
          changed={ this.usernameChanged.bind(this) } />
        <UserOutput
          name= { this.state.dogs[0].name }
          color= { this.state.dogs[0].color }
          username= { this.state.username }
        />
        <UserOutput
        name= { this.state.dogs[1].name }
        color= { this.state.dogs[1].color }
        username= { this.state.username }
        />
        <button
          style={ style }
          onClick={ this.nicknameHandler.bind(this, ['Veevers', 'Bubbi']) }>
          Use Nicknames
        </button>
      </div>
    );
  }
}

export default App;
