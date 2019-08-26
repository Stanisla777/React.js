import React from 'react';
import '../../../App.css';


const MassegeFromUsers=(prop)=>

{

    return(
        <div className="massege_wrapper">
            <div className="massege_wrapper__img">
            </div>
            <div className="massege_wrapper__massege">
                <p>{prop.message}</p>
            </div>

        </div>
    )
};
export default MassegeFromUsers;