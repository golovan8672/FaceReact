import React from 'react';
import stl from './../navbar.module.scss'
import FriendsItem from './FriendItem/FriendsItem';



const Friends = (props) => {
    let friendsElement = props.store.getState().sidebar.friends.map(name => <FriendsItem name = {name.name}/> )
    return (
            <div className={stl.best}>
                <div className={stl.title}>Best Friends</div>
                <div className={stl.friends}>
                    {friendsElement}
                </div>
            </div>
    );
}

export default Friends;