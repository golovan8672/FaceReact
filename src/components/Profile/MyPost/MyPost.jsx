import React from 'react';
import stl from './mypost.module.scss'
import heartLineIcon from '../../../assets/heart-1.png'
import heartRedIcon from '../../../assets/heart-2.png'
import BlueCircle from '../../commons/blueCircle/BlueCircle'

const MyPost = (props) => {
 
    let getText = React.createRef();

    let updateText = () => {
        let text = getText.current.value;
        props.updateNewText(text);
    }
    let addText = () => {
        props.addNewPost();
    }
    
    return (
        <div className={stl.item}>
        
            <div className={stl.title}>My posts</div>
            <textarea ref={getText} onChange={updateText} value={props.updatedText}></textarea>
            <div className={stl.btn}><button className={stl.btn_send} onClick={addText}>Send</button></div>
            {
            props.posts.map(post => <div key={post.id}>
                <div className={stl.post}>  
                    <div className={stl.circle}>{(props.userProfile.photos.small != null) ? <img src = {  props.userProfile.photos.small}/> : <BlueCircle />}</div>
                    <div className={stl.text}>{post.text}</div>
                    <div className={stl.like}>{post.likeCount}<button className = {stl.like_btn} onClick={() => {props.setNewLike(post.id)}}><img src= {post.likeCount === 0 ? heartLineIcon : heartRedIcon} /></button></div>
                </div>
            </div>)
            }



        </div>
    );
    

}

export default MyPost;