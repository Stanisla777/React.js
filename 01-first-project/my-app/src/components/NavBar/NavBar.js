import React from 'react';
import './../../App.css';
import {NavLink} from 'react-router-dom'

const NavBar=()=>
{
    return(
        <div className="wrapper_nav_bar ">
            <ul className="wrapper_nav_bar__list nav_bar_list">
                <li className="item"><NavLink to="/posts">MyPosts</NavLink></li>
                <li className="item"><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li className="item">Разработчикам</li>
                <li className="item">Наша команда</li>
            </ul>
        </div>
    )
};
export default NavBar;