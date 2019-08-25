import React from 'react';
import '../../../App.css';
import MassegeFromUsers from './MassegeFromUsers'
import {NavLink} from "react-router-dom";
import DialogsUsers from './DialogsUsers'



const Dialogs =()=>
{
    let massive_users=[
        {
            id:1,
            name:'Олеся'
        },
        {
            id:2,
            name:'Оксана'
        },
        {
            id:3,
            name:'Маша'
        },
        {
            id:4,
            name:'Катя'
        }
    ]

    let massive = massive_users.map(el=><DialogsUsers name={el.name} id={el.id}/>)
    return (
        <div className='dialogs_container'>
            <div className="dialogs_container__wrapper">
                <div className="dialogs_container_users">
                    {massive}
                </div>




                <div className="dialogs_container_message">
                    <MassegeFromUsers />
                    <MassegeFromUsers />
                    <MassegeFromUsers />
                </div>

            </div>
        </div>
    )
};

export default Dialogs;
