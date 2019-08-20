import React from 'react';
import './../../App.css';
import classes from './NavBar.module.css'


const NavBar=()=>
{
    return(
        <div className={classes.wrapper_nav_bar}>
            <ul className={classes.nav_bar_list}>
                <li><a href="/posts">MyPosts</a></li>
                <li><a href="/dialogs">Dialog</a></li>
                <li>Разработчикам</li>
                <li>Наша команда</li>
            </ul>
        </div>
    )
};
export default NavBar;