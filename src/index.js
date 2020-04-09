import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscriber} from './redux/state';
// import state from './redux/state';



const rerenderTree = (state,addPosts,updateNewText) => {
    ReactDOM.render(
  
      <React.StrictMode>
        <App state = {state} addPosts = {addPosts} updateNewText = {updateNewText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  subscriber(rerenderTree);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

