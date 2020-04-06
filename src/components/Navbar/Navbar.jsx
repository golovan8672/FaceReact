import React from 'react';
import stl from './navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = "menu__row">
            <div className={stl.nav}>
                <ul>
                    <li><NavLink to = '/profile' activeClassName = {stl.active}>Profile</NavLink></li>
                    <li><NavLink to ="/dialogs" activeClassName = {stl.active}>Dialogs</NavLink></li>
                    <li><NavLink to = '/music' activeClassName = {stl.active}>Music</NavLink></li>
                    <li><NavLink to ="/news" activeClassName = {stl.active}>News</NavLink></li>
                    <li><NavLink to = '/settings' activeClassName = {stl.active}>Settings</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;