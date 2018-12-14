import React from 'react';
// import { Link } from 'react-router-dom';
import Link from './components/Links'
import cx from 'classnames';

import styles from './styles.module.scss';
function Navbar (props) {
  return (
    <nav className={styles.navbarContainer}>
      <i className={cx('fab fa-slack','normal',styles.navbarIcon)}></i>
      <Link to={'/game'} name="Game" iFirst="fas" iSecond="fa-gamepad"/> 
      <Link to={'/result'} name="Results" iFirst="fa" iSecond="fa-poll" /> 
      <Link to={'/settings'} name="Settings"iFirst="fas" iSecond="fa-cogs" /> 
      <Link to={'/logout'} name="Log Out" iFirst="fas" iSecond="fa-times-circle"/> 
    </nav>
  )
}

export default Navbar;
