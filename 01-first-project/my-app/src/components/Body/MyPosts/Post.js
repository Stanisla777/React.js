import React from 'react';
import '../../../App.css'




const Post=(props)=>
{

    return(
        <div className="post_item">
            <div className="post_item__img">
                <img src="https://www.nastol.com.ua/pic/201309/2560x1440/nastol.com.ua-58850.jpg" alt=""/>
            </div>
            <div className="post_item__text">
                <p>{props.new_massage}</p>
            </div>
            <div className="post_item__likes">
                <p>{props.like} лайков</p>
            </div>
        </div>
    )
};

export default Post;

