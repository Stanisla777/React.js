import React from 'react';
import '../../../App.css';import Post from './Post'


const ContainerPosts=(props)=>
{

    let linkTextarea = React.createRef();
    let OnClickButton = ()=>{
        let textareaVal = linkTextarea.current.value;
        props.addPost(textareaVal)
    }

    let postMassive = props.appState.massages.massive_post.map(el=><Post new_massage={el.massage} like={el.likeCount} />)


    return(
        <div className="wrapper_posts">

            {postMassive}
            <textarea ref={linkTextarea} placeholder={"Напечатьть пост"}> </textarea>
            <button onClick={OnClickButton} className="post_button" >Опубликовать пост</button>
        </div>
    )
};

export default ContainerPosts;


