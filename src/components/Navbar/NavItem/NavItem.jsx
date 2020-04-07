import React from 'react';
import stl from './../navbar.module.scss'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return(
        <li><NavLink to = {props.path} activeClassName = {stl.active}>{props.nameNav}</NavLink></li>
    )
}

export default NavItem;