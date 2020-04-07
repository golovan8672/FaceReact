import React from 'react';
import stl from './navbar.module.scss'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem/NavItem'


let Navs = [
    {nameNav:"Profile",path:'/profile'},
    {nameNav:"Dialogs",path:'/dialogs'},
    {nameNav:"Music",path:'/music'},
    {nameNav:"News",path:'/news'},
    {nameNav:"Settings",path:'/settings'}
]

const Navbar = () => {
    let navElements = Navs.map(link =><NavItem nameNav = {link.nameNav} path = {link.path}/>)
    return (
        <div className = "menu__row">
            <div className={stl.nav}>
                <ul>
                    {navElements}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;