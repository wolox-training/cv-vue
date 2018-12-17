import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

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

export default FormInput;
