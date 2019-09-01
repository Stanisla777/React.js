import React from 'react';
import '../../../App.css';
import MassegeFromUsers from './MassegeFromUsers'
import {NavLink} from "react-router-dom";
import DialogsUsers from './DialogsUsers'



const ContainerDialogs =(props)=>
{
   let massive_userse = props.appState.massages.massive_users.map(el=><DialogsUsers name={el.name} id={el.id}/>);
    let massive_massage = props.appState.massages.massive_massage.map(el=><MassegeFromUsers message={el.massage}/>);

    let OnClick = ()=>{
        let text = linkInput.current.value;
        alert(text)
    }
    let linkInput = React.createRef();


    return (
        <div className='dialogs_container'>
            <div className="dialogs_container__wrapper">
                <div className="dialogs_container_users">
                    {massive_userse}
                </div>

                <div className="dialogs_container_message">
                    {massive_massage}
                    <textarea ref={linkInput}> </textarea>
                    <button  onClick={OnClick} className='buttton_dialog'>Отправить</button>
                </div>

            </div>

        </div>
    )
};
export default ContainerDialogs;
