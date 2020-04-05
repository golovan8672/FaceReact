import React from 'react';
import MyPost from './MyPost/MyPost';



const Profile = () => {
    return (
        <div className="profile__row">
            <div className="profile__block">
                <p>Your profile</p>
            </div>
            <div className = "profile__text">
                <p>ava + desc</p>
                <MyPost/>
            </div>
        </div>
    );
}

export default Profile;