import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {
  console.log(props);
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts data={props.data}/>
    </div>
  )
};

export default Profile;
