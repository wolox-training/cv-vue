import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import styles from './styles.module.scss';

const FormInput = props => {
  const { label, input, type, meta, valid } = props;
  console.log(props, 'valid')
  const getClassName = (meta) => cx({
    [styles.fieldContainer]: true,
    [styles.invalid]: true,
    [styles.valid]: meta.touch && meta.valid
  });

  return (
    <>
    <div className={getClassName(meta)}>
      <label className={styles.fieldLabel}>{label}</label>
      <input {...input} type={type} className={styles.fieldInput}/>
    </div>
    {(meta.error && meta.touched) && (
      <span className={styles.fieldError}>{meta.error}</span>
    )}
    </>
  )
}

export default FormInput;
