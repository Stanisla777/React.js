import React from 'react';
import '../../App.css';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'



const Profile=(props)=>
{
    return (
        <div className={classes.body}>

            <MyPosts/>

        </div>
    )
};

export default Profile;