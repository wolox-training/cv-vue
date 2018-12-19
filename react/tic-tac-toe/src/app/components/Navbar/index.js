import React from 'react';
import CustomLink from './components/Links'
import cx from 'classnames';

import styles from './styles.module.scss';

function Navbar () {
  return (
    <nav className={styles.navbarContainer}>
      <i className={cx('fab fa-slack','normal',styles.navbarIcon)}></i>
      <CustomLink to={'/game'} name="Game" icon="fas fa-gamepad"/> 
      <CustomLink to={'/result'} name="Results" icon="fa fa-poll" /> 
      <CustomLink to={'/settings'} name="Settings" icon="fas fa-cogs" /> 
      <CustomLink to={'/logout'} name="Log Out" icon="fas fa-times-circle"/> 
    </nav>
  )
}

export default Navbar;
