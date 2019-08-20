import React from 'react';
import '../../App.css';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Dialogs from './Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'



const Profile=(props)=>
{
    return (
        <BrowserRouter>
            <div className={classes.body}>

                {/*<MyPosts/>*/}
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/posts'} component={MyPosts}/>

            </div>
        </BrowserRouter>
    )
};
export default Profile;