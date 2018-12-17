import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './screens/Login';
import Game from './components/Game';
import actions from 'redux/login/actions';

class App extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(actions.getToken(values))
  }

  isLogin = () => {
    const token = localStorage.getItem("token");
    if(token)
      return <Game />
    
    return <Login onSubmit={this.handleSubmit}/>
  }

  render() {
    return (
      <>
        {this.isLogin()}
      </>
    )
  }
}

const mapStateToProps = ({ user: { email, idUser } }) => ({
  email,
  idUser
});

export default connect(mapStateToProps)(App);
