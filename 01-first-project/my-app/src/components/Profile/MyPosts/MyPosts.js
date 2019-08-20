import React from 'react';
import '../../../App.css';
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts=()=>
{
    return(
        <div className={classes.wrapper_posts}>
            <Post like={"15"} message="Привет" />
            <Post like={0} message="Пока"/>

        </div>
    )
};

export default MyPosts;


