import React from 'react';


const Profile = () => {
    return (
        <div className="content__row">
            <div className="content__title">FaceReact помогает вам всегда оставаться на связи и общаться со своими знакомыми.</div>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="" className = "content__img"/>
            <div className = "content__text">
                <p>ava + desc</p>
                <p>My posts</p>
                <p>New post</p>
                <p>Post 1</p>
                <p>Post2</p>
            </div>
        </div>
    );
}

export default Profile;