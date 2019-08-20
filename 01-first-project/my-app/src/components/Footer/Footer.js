import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import classes from './Footer.module.css';
import {BrowserRouter, Route} from 'react-router-dom'

const Footer = () =>
{
    return(
        <footer className={classes.footer}>
            <div className="container">
                <ul className={classes.footer__menu}>
                    <li className={classes.item}><a href='/dialogs'>Profile</a></li>
                    <li className={classes.item}>О компании</li>
                    <li className={classes.item}>Разработчикам</li>
                    <li className={classes.item}>Наша команда</li>

                </ul>
            </div>
        </footer>
    )
};

export default Footer;