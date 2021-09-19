import React from 'react';
import { Link } from 'react-router-dom'
import logo from "./src/img/logo.svg";
import logout from "./src/img/logout_icon.svg";
import message from "./src/img/message_icon.svg";
import setting from "./src/img/settings_icon.svg";
import home from "./src/img/home_icon.svg";
import user from "./src/img/user_icon.svg";
import diploms from "./src/img/diploms.svg";
import "./sidemenu.css"

const SideMenu = ({props}) => (
    <nav className={"side-nav"}>
        <Link to="/home" className="brand">
            <img src={logo} alt="icon"/>
        </Link>
        <ul className={"side__menu"}>
            <li className="menu__item">
                <Link to="/home" className="menu__link">
                    <img src={home} alt="icon"/>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/diploms" className="menu__link">
                    <img src={diploms} alt="icon"/>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/profile" className="menu__link">
                    <img src={user} alt="icon"/>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/messages" className="menu__link">
                    <img src={message} alt="icon"/>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/settings" className="menu__link">
                    <img src={setting} alt="icon"/>
                </Link>
            </li>
        </ul>
        <button className="logout">
            <img src={logout} alt="icon"/>
        </button>
    </nav>
)

export default SideMenu;
