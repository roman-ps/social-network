import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const postsElements = props.data.map((elem, index) => {
    return <Post key={index} text={elem.post} likes={elem.likes} />
  });

  return (
    <div className={classes.posts}>
      <h2>My posts</h2>
      <div>
        <textarea placeholder='Напишите что-нибудь'></textarea>
        <br />
        <button type='button'>Добавить</button>
      </div>
      {postsElements}
    </div>
  )
};

export default MyPosts;
