import React from 'react';
import './../../App.css';
import classes from './MainContainer.module.css';

import NavBar from './../NavBar/NavBar';
import Body from './../Body/Profile'
import Dialogs from './../Dialogs/Dialog'

const MainContainer =()=>
{
    return (
        <div className={classes.body_container}>
            <div className="container">
                <div className={classes.body_container__wrapper}>
                    <NavBar/>
                    <Body/>
                    <Dialogs/>
                </div>

            </div>
        </div>
    )
};

export default MainContainer
