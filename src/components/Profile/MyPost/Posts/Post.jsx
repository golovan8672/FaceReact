import React from 'react';
import stl from './post.module.scss'

const Post = (props) => {
    return (
        <div className = {stl.post}>
            <div className = {stl.circle}></div>
            <div className = {stl.text}>{props.text}</div>
            <div className = {stl.like}>Like {props.likeCount}</div>
        </div>
    );
}

export default Post;