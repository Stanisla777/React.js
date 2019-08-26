import React from 'react';
import '../../../App.css';
import MassegeFromUsers from './MassegeFromUsers'
import {NavLink} from "react-router-dom";
import DialogsUsers from './DialogsUsers'



const Dialogs =()=>
{
    let old_massive_users=[
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

    let massive_massage = [
        {
            // id: 1,
            massage: 'Привет, как дела'
        },
        {
            // id: 2,
            massage: 'Когда пойдешь на работу?'
        }
    ]

    let new_massive_users = old_massive_users.map(el=><DialogsUsers name={el.name} id={el.id}/>)
    let new_mas_mas = massive_massage.map(el=><MassegeFromUsers message={el.massage}/>)
    return (
        <div className='dialogs_container'>
            <div className="dialogs_container__wrapper">
                <div className="dialogs_container_users">
                    {new_massive_users}
                </div>




                <div className="dialogs_container_message">
                    {new_mas_mas}
                </div>

            </div>
        </div>
    )
};

export default Dialogs;
