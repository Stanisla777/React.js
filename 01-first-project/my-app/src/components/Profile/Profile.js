import React from 'react';
import '../../App.css';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Dialogs from './Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'


const Profile=(props)=>
{
    return (
            <div className={classes.body}>
                <Route path='/posts' component={MyPosts} />
                <Route path='/dialogs' component={Dialogs} />
            </div>
    )
};
export default Profile;