import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

function Square(props) {
  return (
    <button 
      className={cx(styles.square, {[styles.squareSecondColor]: props.value!== 'X'})}
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
