import React from 'react';
import stl from './../../navbar.module.scss'



const FriendsItem = (props) => {

    return (
        <div >
            <div className={stl.friend__item}>
                <div className={stl.circle}></div>
                <div className={stl.name}>{props.name}</div>
            </div>
        </div>

    );
}

export default FriendsItem;