import {rerendPageTree} from "../render";


let state={
   massages:{
       massive_post:[
           {id:1,massage:"Привет",likeCount:15},
           {id:2,massage:"Пока",likeCount:14},
           {id:3,massage:"Вот и погоаворили",likeCount:28}
       ],



       massive_users:[
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
       ],
       massive_massage:[
           {
               id: 1,
               massage: 'Привет, как дела?'
           },
           {
               id: 2,
               massage: 'Когда пойдешь на работу?'
           }
       ]
   }
};

export let addPost = (postMassege)=>{
    debugger;
    let perNewPost = {
        id:4,
        massage:postMassege,
        likeCount:0
    }
    state.massages.massive_post.push(perNewPost)
    rerendPageTree(state)

};
export default state


