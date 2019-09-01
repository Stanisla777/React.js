import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './../../App.css';

import NavBar from './../NavBar/NavBar';
import Profile from '../Body/Body'
import ContainerDialogs from '../Body/Dialogs/ContainerDialogs'
import ContainerPosts from '../Body/MyPosts/ContainerPosts'
import {addPost} from "../../redux/state";


const MainContainer =(props)=>
{
   return (

            <div className="body_container">
                <div className="container">
                    <div className="body_container__wrapper">

                        <NavBar/>
                        <Profile addPost={props.addPost} appState={props.appState}/>
                    </div>

                </div>
            </div>

    )
};

export default MainContainer

