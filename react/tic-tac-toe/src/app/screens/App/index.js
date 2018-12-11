import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Game from './components/Game';

class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2))
  }
  // <Login onSubmit={this.handleSubmit}/>
  render() {
    return (
      <>
        <Game />
      </>
    )
  }
}

export default connect()(App);
