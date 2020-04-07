import React from 'react';
import stl from './mypost.module.scss'
import Post from './Posts/Post';


let Posts = [
    {text:"Hi, how are u",likeCount :"10"},
    {text:"I,am fine",likeCount : "2"},
    {text:"Come on",likeCount : "7"}
]

const MyPost = () => {
    let postsElements = Posts.map(el => <Post text = {el.text} likeCount = {el.likeCount} /> )
    return (
        <div className = {stl.item}>
            <div className ={stl.title}>My posts</div>
            <textarea>your text...</textarea>
            <div className = {stl.btn}><button>Send</button></div>
            {postsElements}
        </div>


    );
}

export default MyPost;