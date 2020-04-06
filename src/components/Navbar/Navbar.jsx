import React from 'react';
import stl from './navbar.module.scss'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return(
        <li><NavLink to = {props.path} activeClassName = {stl.active}>{props.nameNav}</NavLink></li>
    )
}

const Navbar = () => {
    return (
        <div className = "menu__row">
            <div className={stl.nav}>
                <ul>
                    <NavItem nameNav = "Profile" path = '/profile'/>
                    <NavItem nameNav = "Dialogs" path = '/dialogs'/>
                    <NavItem nameNav = "Music" path = '/music'/>
                    <NavItem nameNav = "News" path = '/news'/>
                    <NavItem nameNav = "Settings" path = '/settings'/>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;