import React from 'react';
import stl from './navbar.module.scss'
import NavItem from './NavItem/NavItem'
import Friends from './Friends/Friends';


const Navbar = (props) => {

    let navElements = props.store.getState().sidebar.links.map(link => <NavItem nameNav={link.nameNav} path={link.path} />)
    return (
        <div className="menu__row">
            <div className={stl.nav}>
                <ul>
                    {navElements}
                </ul>
            </div>
            <Friends store = {props.store} />
        </div>
    );
}

export default Navbar;