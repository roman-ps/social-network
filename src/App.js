import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import classes from './App.module.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <Header />
        <Navbar />
        <div className={classes.wrapper}>
          <Route path='/profile' render={() => <Profile data={props.data.posts}/>} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.data.dialogs} messages={props.data.messages}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
