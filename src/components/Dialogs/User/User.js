import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const User = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={classes.user}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

export default User;
