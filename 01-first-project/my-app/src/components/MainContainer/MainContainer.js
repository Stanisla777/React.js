import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './../../App.css';
import classes from './MainContainer.module.css';

import NavBar from './../NavBar/NavBar';
import Profile from '../Body/Profile'
import Dialogs from '../Body/Dialogs/Dialogs'
import MyPosts from '../Body/MyPosts/MyPosts'


const MainContainer =()=>
{
    return (

            <div className={classes.body_container}>
                <div className="container">
                    <div className={classes.body_container__wrapper}>
                        <NavBar/>
                        <Profile/>
                    </div>

                </div>
            </div>

    )
};

export default MainContainer
