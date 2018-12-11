import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Game from './components/Game';

class App extends Component {
  state = {
    email: '',
    idUser: null
  }

  handleSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2))
  }
  
  render() {
    return (
      <>
        <Game />
        <Login onSubmit={this.handleSubmit}/>
      </>
    )
  }
}

export default connect()(App);
