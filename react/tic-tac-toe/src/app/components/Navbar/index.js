import React from 'react';
import CustomLink from './components/Links'
import cx from 'classnames';

import styles from './styles.module.scss';
function Navbar (props) {
  return (
    <nav className={styles.navbarContainer}>
      <i className={cx('fab fa-slack','normal',styles.navbarIcon)}></i>
      <CustomLink to={'/game'} name="Game" iFirst="fas" iSecond="fa-gamepad"/> 
      <CustomLink to={'/result'} name="Results" iFirst="fa" iSecond="fa-poll" /> 
      <CustomLink to={'/settings'} name="Settings" iFirst="fas" iSecond="fa-cogs" /> 
      <CustomLink to={'/logout'} name="Log Out" iFirst="fas" iSecond="fa-times-circle"/> 
    </nav>
  )
}

export default Navbar;
