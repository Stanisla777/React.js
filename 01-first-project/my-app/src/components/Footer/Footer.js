import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import {NavLink} from 'react-router-dom'


const Footer = () =>
{
    return(
            <footer className="footer">
                <div className="container">
                    <ul className="nav_bar_list">
                        <li ><NavLink activeClassName={"active_link"} to="/posts">MyPosts</NavLink></li>
                        <li ><NavLink activeClassName={"active_link"} to="/dialogs">Dialogs</NavLink></li>
                        <li >Разработчикам</li>
                        <li >Наша команда</li>

                    </ul>
                </div>
            </footer>
    )
};

export default Footer;