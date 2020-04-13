import React from 'react';
import stl from './navbar.module.scss'
import NavItem from './NavItem/NavItem'
import FriendsItem from './FriendsItem/FriendsItem';


const Navbar = (props) => {

    let navElements = props.sidebar.links.map(link => <NavItem nameNav={link.nameNav} path={link.path} />)
    let friendsElement = props.sidebar.friends.map(name => <FriendsItem name = {name.name}/> )
    return (
        <div className="menu__row">
            <div className={stl.nav}>
                <ul>
                    {navElements}
                </ul>
            </div>
            <div className={stl.best}>
                <div className={stl.title}>Best Friends</div>
                <div className={stl.friends}>
                    {friendsElement}
                </div>
            </div>
        </div>
    );
}

export default Navbar;