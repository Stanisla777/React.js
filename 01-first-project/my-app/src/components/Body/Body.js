import React from 'react';
import '../../App.css';
import classes from './Body.module.css'
import MyPosts from './MyPosts/MyPosts'



const Body=()=>
{
    return(
        <div className={classes.body}>
            <MyPosts/>

        </div>
    )
};

export default Body;