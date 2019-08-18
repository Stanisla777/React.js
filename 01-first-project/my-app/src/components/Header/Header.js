import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import './Header.css';

const Header=()=>
{
    return(
        <header className='header'>
            <div className="logo"> </div>
            <div className="header__name-compony">
                <p>Название компании</p>
            </div>
            <div className="header_adress">
                <p>Адрес компании</p>
                <p>Телефон компании компании</p>
            </div>
        </header>
    )
};

export default Header;