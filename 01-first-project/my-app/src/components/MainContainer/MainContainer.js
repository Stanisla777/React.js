import React from 'react';
import {Route} from 'react-router-dom'

import './../../App.css';
import classes from './MainContainer.module.css';

import NavBar from './../NavBar/NavBar';
import Profile from '../Profile/Profile'
import Dialogs from '../Profile/Dialogs/Dialogs'
import MyPosts from '../Profile/MyPosts/MyPosts'


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
