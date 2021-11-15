import React from 'react';
import { Link } from 'react-router-dom'
import logo from "./src/img/logo.svg";
import logout from "./src/img/logout_icon.svg";
import message from "./src/img/message_icon.svg";
import setting from "./src/img/settings_icon.svg";
import home from "./src/img/home_icon.svg";
import user from "./src/img/user_icon.svg";
import diploms from "./src/img/diploms.svg";
import "./mobilemenu.css"

const MobileMenu = ({props}) => (
    <nav className={"mobile-nav"}>
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
        <button className="menu"
                onClick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                aria-label="Main Menu">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <path className="line line1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                <path className="line line2" d="M 20,50 H 80"/>
                <path className="line line3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
        </button>
    </nav>
)

export default MobileMenu;
