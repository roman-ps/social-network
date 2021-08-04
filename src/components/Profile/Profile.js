import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <img src='https://images.unsplash.com/photo-1626281833458-1308b278849b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80' alt='React Infinity' width='100%' height='100px'></img>
      Ava + Description
    </div>
  )
};

const Profile = () => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
};

export default Profile;
