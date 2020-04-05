import React from 'react';
import stl from './mypost.module.scss'
import Post from './Posts/Post';

const MyPost = () => {
    return (
        <div className = {stl.item}>
            <div className ={stl.title}>My posts</div>
            <textarea>your text...</textarea>
            <div className = {stl.btn}><button>Send</button></div>
            <Post text = "Hi, how are u" likeCount = "10" />
            <Post text = "I'am fine" likeCount = "2" />
            <Post text = "Come on" likeCount = "7" />
        </div>


    );
}

export default MyPost;