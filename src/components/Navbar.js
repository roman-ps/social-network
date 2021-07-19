import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <li className='item'><a href='#'>Profile</a></li>
        <li className='item'><a href='#'>Messages</a></li>
        <li className='item'><a href='#'>News</a></li>
        <li className='item'><a href='#'>Music</a></li>
        <li className='item'><a href='#'>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
