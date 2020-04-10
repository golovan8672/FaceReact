import React from 'react';
import stl from './mypost.module.scss'
import Post from './Posts/Post';
import { addPostActionCreator,updateNewTextActionCreator } from '../../../redux/store';



const MyPost = (props) => {
    let getText = React.createRef();
    
    let updateText = () => {
        let text = getText.current.value;
         props.dispatch(updateNewTextActionCreator(text));
    }
    let addText = () => {
        props.dispatch(addPostActionCreator());
    }

    let postsElements = props.state.posts.map(el => <Post text={el.text} likeCount={el.likeCount} />)
    return (
        <div className={stl.item}>
            <div className={stl.title}>My posts</div>
            <textarea ref={getText} onChange={updateText} value={props.state.updatedText}></textarea>

            <div className={stl.btn}><button onClick={addText}>Send</button></div>
            {postsElements}
        </div>


    );
}

export default MyPost;