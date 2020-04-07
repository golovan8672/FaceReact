import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './../dialogs.module.scss'


const DialogItem= (props) => {
    return (
        <div className={stl.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>

    )
}

export default DialogItem