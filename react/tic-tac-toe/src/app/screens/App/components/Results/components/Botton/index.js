import React from 'react';
import styles from './styles.module.scss';

function CustomButton (props) {
  return <button 
    className={styles.backButton} 
    onClick={props.onClick}>
      <i className={props.icon}></i>
    </button>
}

export default CustomButton;
