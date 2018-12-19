import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

function LinkItem ({ to, name, icon }) {
  return (
    <div className={styles.container}>
      <Link 
        className={styles.link} to={to}>
        <i className={cx(icon, styles.icon)}></i> {name} 
      </Link>
    </div>
  );
}

LinkItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string
}

export default LinkItem;
