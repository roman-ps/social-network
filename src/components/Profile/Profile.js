import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const postsData = [
  { id: 1, post: 'Lets go', likes: 4 },
  { id: 2, post: 'Just go', likes: 22 },
  { id: 3, post: 'Another go', likes: 345 },
  { id: 4, post: 'Red go-go', likes: 11 },
  { id: 5, post: 'Wonderful go', likes: 9 },
];

const Profile = () => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
};

export default Profile;
