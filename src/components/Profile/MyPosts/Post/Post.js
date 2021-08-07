import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={classes.post}>{props.text}</div>
      <div className={classes.likes}>Likes: {props.likes}</div>
    </div>
  )
};

export default Post;
