import React from 'react';
import './profile.scss';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../commons/preloader';



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
            <ProfileInfo userProfile = {props.userProfile} />
            <MyPostContainer userProfile = {props.userProfile} />
        </div>
        
    );
}

export default Profile;