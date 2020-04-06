import React from 'react'
import stl from './dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.path
    return (
            <div className={stl.dialog}><NavLink to={path}>{props.name}</NavLink></div>

    )
}
const MessageItem = (props) => {
    return (
            <div className={stl.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={stl.dialogs__row}>
            <div className={stl.dialogs}>
            <DialogItem name="Sergey" path="1" />
            <DialogItem name="Anton" path="2" />
            <DialogItem name="Andrey" path="3" />
            <DialogItem name="Svetlana" path="4" />
            <DialogItem name="Alex" path="5" />
            <DialogItem name="Dorn" path="6" />
            </div>
            <div className={stl.messages}>
            <MessageItem message="Hello,come on" />
            <MessageItem message="No,thx" />
            <MessageItem message="Okey,bro" />
            </div>
            
        </div>

    )
}

export default Dialogs