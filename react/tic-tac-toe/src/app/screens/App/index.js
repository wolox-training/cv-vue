import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login'

class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2))
  }

  render() {
    return (
      <>
        <Login onSubmit={this.handleSubmit}/>
      </>
    )
  }
}

export default connect()(App);
