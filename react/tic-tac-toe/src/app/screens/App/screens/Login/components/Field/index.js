import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const FormInput = props => {
  const { label, input, type, meta } = props;
  const getClassName = (meta) => cx(styles.fieldContainer, {
    [styles.invalid]: meta.touched && meta.invalid,
    [styles.valid]: meta.touched && meta.valid
  });

  return (
    <>
    <div className={getClassName(meta)}>
      <input {...input} type={type} className={styles.fieldInput} placeholder={label}/>
      <label className={styles.fieldLabel}>{label}</label>
    </div>
    {(meta.error && meta.touched) && (
      <span className={styles.fieldError}>{meta.error}</span>
    )}
    </>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default FormInput;
