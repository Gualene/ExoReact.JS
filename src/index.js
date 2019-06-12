import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Info from './Info';
import Mapp from './Mapp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Mapp />, document.getElementById('mapp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
