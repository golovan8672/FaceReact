import React from 'react';
import stl from './mypost.module.scss'
import Post from './Posts/Post';



const MyPost = (props) => {

    let getText = React.createRef();
    
    let updateText = () => {
        props.updateNewText(getText.current.value);
    }

    let postsElements = props.state.posts.map(el => <Post text={el.text} likeCount={el.likeCount} />)
    return (
        <div className={stl.item}>
            <div className={stl.title}>My posts</div>
            <textarea ref={getText} onChange={updateText} value={props.state.updatedText}></textarea>

            <div className={stl.btn}><button onClick={props.addPosts}>Send</button></div>
            {postsElements}
        </div>


    );
}

export default MyPost;