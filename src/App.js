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
  console.log('props: ', props)
  console.log('props.data: ', props.data)
  console.log('props.data.postsData: ', props.data.postsData)
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <Header />
        <Navbar />
        <div className={classes.wrapper}>
          <Route path='/profile' render={() => <Profile data={props.data.postsData}/>} />
          <Route path='/dialogs' render={() => <Dialogs data={props.data.dialogsData}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
