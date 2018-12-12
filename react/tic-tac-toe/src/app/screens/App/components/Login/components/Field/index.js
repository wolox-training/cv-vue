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
      <label className={meta.visited ? styles.fieldLabelVisited : styles.fieldLabel}>{label}</label>
      <input {...input} type={type} className={styles.fieldInput}/>
    </div>
    {(meta.error && meta.touched) && (
      <span className={styles.fieldError}>{meta.error}</span>
    )}
    </>
  )
}

export default FormInput;
