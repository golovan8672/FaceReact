import React from 'react';
import './profile.scss';
import MyPostContainer from './MyPost/MyPostContainer';

const ProfileInfo = () => {
    return (
        <div>
            <div className="profile__text">
                <p>ava + desc</p>
            </div>
        </div>

    )
}

const Profile = (props) => {
 
    
    return (
        <div className="profile__row">
            <div className="profile__block">
                <p>Your profile</p>
            </div>
            <ProfileInfo />
            <MyPostContainer  />
        </div>
        
    );
    debugger
}

export default Profile;