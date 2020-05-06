import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__description">faceReact</div>
                    {props.isAuth ? <div>{props.login} <button onClick = {props.logout} className = 'loginBtn'>Sign out</button></div> :
                    <NavLink to="/login"><button className="loginBtn">Sign in</button></NavLink>}
                </div>
            </div>
        </header>
    );
}
export default Header;