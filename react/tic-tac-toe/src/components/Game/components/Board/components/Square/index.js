import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square(props) {
  return (
    <button 
      className={styles.square} 
      onClick={() => props.onClick(props.id)}
    >
      {props.value}
    </button>
  );
}

Square.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;
