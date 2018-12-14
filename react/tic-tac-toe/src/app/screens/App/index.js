import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from 'app/components/Routes';
import { tokenExist } from './utils';

class App extends Component {

  componentDidMount() {
    tokenExist(this.props)
  }

  render() {
    return (
      <>
        <Routes />
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
