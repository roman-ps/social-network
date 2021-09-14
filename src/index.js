import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DATA from './redux/state';

const MAIN_DIV = document.querySelector('#root');

ReactDOM.render(<App data={DATA}/>, MAIN_DIV);
