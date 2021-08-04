import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2>My posts</h2>
      <div>
        <textarea placeholder='Напишите что-нибудь'></textarea>
        <br></br>
        <button>Добавить</button>
      </div>
      <Post text='Lets go'/>
      <Post text='Just do it'/>
      <Post text='Five point'/>
      <Post text='Muahaha'/>
    </div>
  )
};

export default MyPosts;
