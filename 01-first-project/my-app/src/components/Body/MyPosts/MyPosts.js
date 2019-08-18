import React from 'react';
import '../../../App.css';
import classes from './MyPosts.module.css'
import Post from '../Post/Post'


const MyPosts=()=>
{
    return(
        <div className={classes.wrapper_posts}>
            <Post />

        </div>
    )
};

export default MyPosts;