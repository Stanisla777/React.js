import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import './Header.css';

const Header=()=>
{
    return(
        <header className='header'>
            <div className="container">
                <div className="header_wrapper">
                    <div className="logo"> </div>
                    <div className="header__name-compony">
                        <p>Социальная сеть</p>
                    </div>
                    <div className="header_adress">
                        <p>Адрес компании</p>
                        <p>Телефон компании компании</p>
                    </div>
                </div>

            </div>
        </header>
    )
};

export default Header;