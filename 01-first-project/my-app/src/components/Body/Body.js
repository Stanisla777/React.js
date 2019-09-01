import React from 'react';
import '../../App.css';
import ContainerPosts from './MyPosts/ContainerPosts'
import ContainerDialogs from './Dialogs/ContainerDialogs'
import {Route} from 'react-router-dom'





const Body = (props) => {
    return (
        <div className="wrapper_profile">
            <Route  path='/posts' render={()=><ContainerPosts addPost={props.addPost}  appState={props.appState}/>}/>
            <Route path='/dialogs' render={()=><ContainerDialogs appState={props.appState}/>}/>
        </div>
    )
};
export default Body;
