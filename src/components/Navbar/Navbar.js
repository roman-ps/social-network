import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.item}><a className={`${classes.link} ${classes.active}`} href='profile.html'>Profile</a></li>
        <li className={classes.item}><a className={classes.link} href='messages.html'>Messages</a></li>
        <li className={classes.item}><a className={classes.link} href='new.html'>News</a></li>
        <li className={classes.item}><a className={classes.link} href='music.html'>Music</a></li>
        <li className={classes.item}><a className={classes.link} href='settings.html'>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
