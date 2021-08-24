import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

// const postsData = [
//   { id: 1, post: 'Lets go', likes: 4 },
//   { id: 2, post: 'Just go', likes: 22 },
//   { id: 3, post: 'Another go', likes: 345 },
//   { id: 4, post: 'Red go-go', likes: 11 },
//   { id: 5, post: 'Wonderful go', likes: 9 },
// ];

// const postsElements = postsData.map((elem) => {
//   return <Post text={elem.post} likes={elem.likes} />
// });

const MyPosts = (props) => {

  const postsElements = props.data.map((elem, index) => {
    return <Post key={index} text={elem.post} likes={elem.likes} />
  });

  return (
    <div className={classes.posts}>
      <h2>My posts</h2>
      <div>
        <textarea placeholder='Напишите что-нибудь'></textarea>
        <br></br>
        <button>Добавить</button>
      </div>
      {postsElements}
    </div>
  )
};

export default MyPosts;
