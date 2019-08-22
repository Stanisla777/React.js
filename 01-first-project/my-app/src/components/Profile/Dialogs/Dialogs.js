import React from 'react';
import '../../../App.css';
import MassegeUsers from './MassegeUsers'



const Dialogs =()=>
{
    return (
        <div className='dialogs_container'>
            <div className="dialogs_container__wrapper">
                <div className="dialogs_container_users">
                    <div className="dialogs_container_users__item">
                        <p>Светлана</p>
                    </div>

                    <div className="dialogs_container_users__item">
                        <p>Оксана</p>
                    </div>

                    <div className="dialogs_container_users__item">
                        <p>Юля</p>
                    </div>

                    <div className="dialogs_container_users__item">
                        <p>Оксаночка</p>
                    </div>
                </div>




                <div className="dialogs_container_message">
                    <MassegeUsers />
                </div>

            </div>
        </div>
    )
};

export default Dialogs;
