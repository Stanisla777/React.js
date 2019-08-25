import React from 'react';
import '../../App.css';
import MyPosts from './MyPosts/MyPosts'
import Dialogs from './Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'


const Body = (props) => {
    return (
        <div className="wrapper_profile">
            <Route path='/posts' component={MyPosts}/>
            <Route path='/dialogs' component={Dialogs}/>
        </div>
    )
};
export default Body;