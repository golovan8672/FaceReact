import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__description">faceReact</div>
                    {props.isAuth === true ? <div>{props.login}</div> :
                    <NavLink to="/login"><div className="login">SIGH IN</div></NavLink>}
                </div>
            </div>
        </header>
    );
}
export default Header;