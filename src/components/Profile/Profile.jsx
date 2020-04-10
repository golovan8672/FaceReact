import React from 'react';
import MyPost from './MyPost/MyPost';
import './profile.scss';

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
            <MyPost state = {props.state.profilePage} dispatch = {props.dispatch} />
        </div>
        
    );
    debugger
}

export default Profile;