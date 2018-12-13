import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Game from './components/Game';
import { tokenExist } from './utils';

class App extends Component {

  componentDidMount() {
    tokenExist(this.props)
  }

  render() {
    return (
      <>
        {this.props.isLogged ? <Game /> : <Redirect to="/login"/>}
      </>
    )
  }
}

const mapStateToProps = ({ user: { email, idUser }, general :{ isLogged } }) => ({
  email,
  idUser, 
  isLogged
});

export default connect(mapStateToProps)(App);
