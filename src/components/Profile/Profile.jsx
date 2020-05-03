import React from 'react';
import './profile.scss';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../commons/preloader/Preloader';



const Profile = (props) => {
 
    if (!props.userProfile){
        return (
            <Preloader />
        )
    }
    return (
        <div className="profile__row">
            <div className="profile__block">
                <p>Your profile</p>
            </div>
            <ProfileInfo userProfile = {props.userProfile} profileStatus = {props.profileStatus} updateProfileStatus = {props.updateProfileStatus} />
            <MyPost 
            userProfile = {props.userProfile}
            posts = {props.posts}
            updateNewText = {props.updateNewText}
            setNewLike = {props.setNewLike}
            addNewPost = {props.addNewPost}
            updatedText = {props.updatedText}
            />
        </div>
        
    );
}

export default Profile;