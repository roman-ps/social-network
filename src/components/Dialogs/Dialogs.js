import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const User = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={classes.user}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={classes.message}>{props.text}</div>
  )
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.users}>
        <User name='Rudo' id='1' />
        <User name='Mara' id='2'/>
        <User name='Kent' id='3'/>
        <User name='Tala' id='4'/>
        <User name='John' id='5'/>
      </div>
      <div className={classes.messages}>
        <Message text='Javascript forever'/>
        <Message text='Batman return'/>
        <Message text='Play dota'/>
      </div>
    </div>
  )
};

export default Dialogs;
