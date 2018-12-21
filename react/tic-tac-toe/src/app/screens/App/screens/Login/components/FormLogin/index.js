import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormField from '../Field';
import WithLoading from 'HOC/loading';
import { required, isMail, minLength } from 'validations';
import cx from 'classnames';

import styles from './styles.module.scss';

class LoginForm extends Component {

  render() {
    const getClassName = ({valid, pristine}) => cx(styles.buttonForm, {
      [styles.enable]: valid && !pristine,
      [styles.disable]: !valid,
      [styles.error]: this.props.status === 'CLIENT_ERROR' || this.props.status === 'ERR_CONNECTION_REFUSED'
    });

    const getMessage = () => {
      if(this.props.status === 'CLIENT_ERROR')
        return 'email or password are wrong, please check them'
      else if (this.props.status === 'ERR_CONNECTION_REFUSED')
        return 'Server no connected'
      return ''
    }

    return (
        <div className={styles.containerForm}>
          <form onSubmit={this.props.handleSubmit}>
            <Field 
              name="email" 
              component={FormField} 
              type="text" 
              className={styles.fieldInput} 
              label="Email"
              validate={[required,isMail]} 
            />
            <Field 
              name="password" 
              component={FormField} 
              type="password" 
              className={styles.fieldInput} 
              label="Password"
              validate={[required, minLength]}
            />
            <button type="submit" className={getClassName(this.props)} >Log In</button>
          </form>
          <span className={styles.formStatus} >{getMessage()}</span>
        </ div>
      )
  }
}

LoginForm = reduxForm({
  form: 'LoginForm',
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  status: PropTypes.string
};

const mapStateToProps = ({user :{ status, tokenLoading }}) => ({
  status,
  tokenLoading
});

export default WithLoading(connect(mapStateToProps)(LoginForm));
