import React from 'react';
import stl from './navbar.module.scss'
import NavItem from './NavItem/NavItem'


const Navbar = (props) => {

    let navElements = props.state.links.map(link =><NavItem nameNav = {link.nameNav} path = {link.path}/>)
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