import React from 'react';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
