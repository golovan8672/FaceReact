import React from 'react';
import { addPostActionCreator,updateNewTextActionCreator } from '../../../redux/profile-Reducer';
import MyPost from './MyPost'



const MyPostContainer = (props) => {
    
    let updateNewText = (text) => {
        props.store.dispatch(updateNewTextActionCreator(text));
    }
    let addNewText = () => {
        props.store.dispatch(addPostActionCreator());
    }
    return (
        <MyPost 
        updateNewText = {updateNewText}
        addNewText = {addNewText}
        posts = {props.store.getState().profilePage.posts}
        updatedText = {props.store.getState().profilePage.updatedText}
        />


    );
}

export default MyPostContainer;