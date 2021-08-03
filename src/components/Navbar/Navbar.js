import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.item}><NavLink className={`${classes.link}`} to='/profile' activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to='/dialogs' activeClassName={classes.active}>Messages</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to='/news' activeClassName={classes.active}>News</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to='/music' activeClassName={classes.active}>Music</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to='/settings' activeClassName={classes.active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
