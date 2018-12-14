import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles.module.scss';
function LinkItem ({to, name, iFirst, iSecond}) {
  return (
    <div className={styles.container}>
      <i className={cx(iFirst, iSecond, styles.icon)}></i>
      <Link className={styles.link} to={to}> {name} </Link>
    </div>
  );
}

export default LinkItem;
