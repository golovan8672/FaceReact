import React from 'react';
import stl from './../navbar.module.scss';
import BlueCircle from '../../commons/blueCircle/BlueCircle';





const FriendsItem = (props) => {

    return (
        <div >
            <div className={stl.friend__item}>
                <BlueCircle />
                <div className={stl.name}>{props.name}</div>
            </div>
        </div>

    );
}

export default FriendsItem;