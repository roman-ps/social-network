import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MAIN_DIV = document.querySelector('#root');

const DATA = {
  posts: [
    { id: 1, post: 'Lets go', likes: 4 },
    { id: 2, post: 'Just go', likes: 22 },
    { id: 3, post: 'Another go', likes: 345 },
    { id: 4, post: 'Red go-go', likes: 11 },
    { id: 5, post: 'Wonderful go', likes: 9 },
  ],
  dialogs: [
    { id: 1, name: 'Rudo' },
    { id: 2, name: 'Mara' },
    { id: 3, name: 'Kent' },
    { id: 4, name: 'Tala' },
    { id: 5, name: 'John' },
  ],
  messages: [
    { id: 1, message: 'Javascript forever' },
    { id: 2, message: 'Batman return' },
    { id: 3, message: 'Play dota' },
    { id: 4, message: 'Go to the ocean' },
    { id: 5, message: 'Beautiful wood' },
  ],
};

ReactDOM.render(<App data={DATA}/>, MAIN_DIV);
