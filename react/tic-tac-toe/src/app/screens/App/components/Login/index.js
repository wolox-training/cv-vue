import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './components/Field';
import { required, isMail, minLength } from '../.../../../../../../validations';
import cx from 'classnames';

import styles from './styles.module.scss';

class Login extends Component {
  render() {

    const getClassName = ({valid, pristine}) => cx(styles.buttonForm, {
      [styles.enable]: valid && !pristine,
      [styles.disable]: !valid,
      [styles.error]: this.props.status === 'CLIENT_ERROR'
    });

    const getMessage = () => {
      if(this.props.status === 'CLIENT_ERROR')
        return 'email or password are wrong, please check them'

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
          <button type="submit" className={getClassName(this.props)} >Login</button>
        </form>
        <span className={styles.formStatus} >{getMessage()}</span>
      </ div>
    )
  }
}

Login = reduxForm({
  form: 'login',
})(Login);

const mapStateToProps = ({user :{ status }}) => ({
  status
});

export default connect(mapStateToProps)(Login);
