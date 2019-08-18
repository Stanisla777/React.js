import React from 'react';

import '../../../App.css'
import classes from './Post.module.css'



const Post=()=>
{
    return(
        <div className={classes.post_item}>
            <div className={classes.post_item__img}>
                <img src="" alt=""/>
            </div>
            <div className={classes.post_item__text}>
                <p>Пост 1</p>
            </div>


        </div>
    )
};

export default Post;