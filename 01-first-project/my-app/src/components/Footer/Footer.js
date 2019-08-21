import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import classes from './Footer.module.css';
import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'


const Footer = () =>
{
    return(
<BrowserRouter>
    <Route>
            <footer className={classes.footer}>
                <div className="container">
                    <ul className={classes.footer__menu}>
                        <li className={classes.item}><NavLink to="/posts">MyPosts</NavLink></li>
                        <li className={classes.item}><NavLink to="/dialogs">Dialogs</NavLink></li>
                        <li className={classes.item}>Разработчикам</li>
                        <li className={classes.item}>Наша команда</li>

                    </ul>
                </div>
            </footer>
    </Route>
</BrowserRouter>
    )
};

export default Footer;