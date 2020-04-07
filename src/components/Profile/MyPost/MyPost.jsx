import React from 'react';
import stl from './mypost.module.scss'
import Post from './Posts/Post';



const MyPost = (props) => {
 
    let postsElements = props.state.posts.map(el => <Post text = {el.text} likeCount = {el.likeCount} /> )
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