import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Game from './components/Game';
import actions from '../../../redux/login/actions';

class App extends Component {
  state = {
    email: '',
    idUser: null
  }

  handleSubmit = (values) => {
    console.log(values, 'values')
    this.props.dispatch(actions.getToken(values))
  }

  isLogin = () => {
    const token = localStorage.getItem("token");
    console.log(token, 'token')
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
