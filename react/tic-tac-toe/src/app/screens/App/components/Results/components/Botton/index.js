import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function CustomButton (props) {
  return <button 
    className={styles.backButton} 
    onClick={props.onClick}>
      <i className={props.icon}></i>
    </button>
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string
};

export default CustomButton;
