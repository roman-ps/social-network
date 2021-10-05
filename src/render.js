import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DATA, {addMessages, updatePostText} from './redux/state';

const MAIN_DIV = document.querySelector('#root');

const renderData = () => {
  ReactDOM.render(<App data={DATA} addMessages={addMessages} updatePostText={updatePostText}/>, MAIN_DIV);
}

export default renderData;
