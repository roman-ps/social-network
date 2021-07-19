import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <main className='content'>
      <img src='https://images.unsplash.com/photo-1626281833458-1308b278849b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80' alt='React Infinity' width='100%' height='100px'></img>
      <div className='descriptions'>Ava</div>
      <div className='posts'>Posts</div>
    </main>
  );
}

export default Profile;

