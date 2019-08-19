import React from 'react';
import '../../../App.css'
import classes from './Post.module.css'



const Post=(props)=>
{

    return(
        <div className={classes.post_item}>
            <div className={classes.post_item__img}>
                <img src="https://www.nastol.com.ua/pic/201309/2560x1440/nastol.com.ua-58850.jpg" alt=""/>
            </div>
            <div className={classes.post_item__text}>
                <p>{props.message}</p>
            </div>
            <div className={classes.post_item__likes}>
                <p>{props.like} лайков</p>
            </div>
        </div>
    )
};

export default Post;

