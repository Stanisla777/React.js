import React from 'react';
import '../../../App.css';
import {NavLink} from "react-router-dom";


const DialogsUsers=(props)=>
{
    return(
        <div className="dialogs_container_users__item">
            <NavLink to={'/dialogs/'+props.id}>{props.name}

            </NavLink>
        </div>
    )
};
export default DialogsUsers