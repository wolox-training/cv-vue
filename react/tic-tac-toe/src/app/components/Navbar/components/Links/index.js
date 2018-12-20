import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

function LinkItem ({ to, name, icon }) {
  return (
    <div className={styles.container}>
      <NavLink 
        activeClassName={styles.active}
        className={styles.link} to={to}>
        <i className={cx(icon, styles.icon)}></i> {name} 
      </NavLink>
    </div>
  );
}

LinkItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string
}

export default LinkItem;
