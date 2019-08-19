import React from 'react';
import './../../App.css';
import classes from './NavBar.module.css'


const NavBar=()=>
{
    return(
        <div className={classes.wrapper_nav_bar}>
            <ul className={classes.nav_bar_list}>
                <li>Profile</li>
                <li>Message</li>
                <li>Разработчикам</li>
                <li>Наша команда</li>
            </ul>
        </div>
    )
};
export default NavBar;