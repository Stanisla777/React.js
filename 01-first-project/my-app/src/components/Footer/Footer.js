import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import classes from './Footer.module.css'

const Footer = () =>
{
    return(
        <footer className={classes.footer}>
            <ul className={classes.footer__navba}>
                <li className={classes.item}>Пукт 1</li>
                <li className={classes.item}>Пукт 2</li>
                <li className={classes.item}>Пукт 3</li>
                <li className={`${classes.item} ${classes.active}`}>Пукт 4</li>
            </ul>
        </footer>
    )
};

export default Footer;