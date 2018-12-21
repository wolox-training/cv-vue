import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './components/FormLogin';
import actions from 'redux/login/actions';
import WithLoading from 'HOC/loading'
import { tokenExist } from 'app/screens/App/utils';

const LoginFormWithLoading = WithLoading(LoginForm);

class Login extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(actions.getToken(values));
  }

  componentDidMount() {
    if(!this.props.isLogged){
      tokenExist(this.props);
    }
  }

  render() {
    return (
      <>
        <LoginFormWithLoading isLogin={this.props.tokenLoading} onSubmit={this.handleSubmit} />
      </>
    )
  }
}

const mapStateToProps = ({ general: { isLogged }, user: { tokenLoading } }) => ({
  isLogged,
  tokenLoading
});

Login.propsTypes = {
  isLogged: PropTypes.bool,
  tokenLoading: PropTypes.bool
}

export default connect(mapStateToProps)(Login);
