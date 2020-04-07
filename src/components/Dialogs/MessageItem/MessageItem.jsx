import React from 'react'
import stl from './../dialogs.module.scss'


const MessageItem = (props) => {
    return (
        <div className={stl.message}>{props.message}</div>
    )
}


export default MessageItem