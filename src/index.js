import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let posts = [
  {text:"Hi, how are u",likeCount :"10"},
  {text:"I,am fine",likeCount : "2"},
  {text:"Come on",likeCount : "7"}
]
export let dialogs = [
  { name: "Sergey", id: 1 },
  { name: "Elena", id: 2 },
  { name: "Anton", id: 3 },
  { name: "Andrey", id: 4 },
  { name: "Boris", id: 5 },
  { name: "Sasha", id: 6 },
  { name: "Fedor", id: 7 },
  { name: "Georg", id: 8 }
]
export let messages = [
  { message: "Hello", id: 1 },
  { message: "Okey", id: 2 },
  { message: "Bro", id: 3 },
  { message: "luv u", id: 4 },
  { message: "come on", id: 5 },
]
 export let links = [
  {nameNav:"Profile",path:'/profile'},
  {nameNav:"Dialogs",path:'/dialogs'},
  {nameNav:"Music",path:'/music'},
  {nameNav:"News",path:'/news'},
  {nameNav:"Settings",path:'/settings'}
]



ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

