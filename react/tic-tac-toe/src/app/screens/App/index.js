import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import CustomRoute from '../../components/CustomRoute'
import Navbar from 'app/components/Navbar';
import Game from './components/Game'
import Result from './components/Results'

import { tokenExist } from 'app/screens/App/utils';
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <CustomRoute exact path="/game" component={Game} isPrivate auth={this.props.isLogged} />
          <CustomRoute exact path="/result" component={Result} isPrivate auth={this.props.isLogged} />
          <Route exact path="/logout" render={() => {
            localStorage.removeItem('token');
            tokenExist(this.props);
            return <Redirect to="login" />
          }} isPrivate auth={this.props.isLogged} />
          <Redirect to="/game" />
        </Switch>
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
