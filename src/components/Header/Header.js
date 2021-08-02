import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://img.icons8.com/dusk/64/000000/social-network.png' alt='Logo' width='auto' height='auto'></img>
    </header>
  );
}

export default Header;
