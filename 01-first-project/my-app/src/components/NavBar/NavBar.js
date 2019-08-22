import React from 'react';
import './../../App.css';
import classes from './NavBar.module.css'
import {NavLink, Route} from 'react-router-dom'

const NavBar=()=>
{
    return(
        <div className={classes.wrapper_nav_bar}>
            <ul className={classes.nav_bar_list}>
                <li><NavLink to="/posts">MyPosts</NavLink></li>
                <li><NavLink to="/dialogs">Dialog</NavLink></li>
                <li>Разработчикам</li>
                <li>Наша команда</li>
            </ul>
        </div>
    )
};
export default NavBar;