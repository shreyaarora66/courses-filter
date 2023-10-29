import React from "react";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import {toast} from 'react-toastify';
function Card(props){
    function clickHandler(){
       if(props.likedCourses.includes(props.data.id)){
        //like ho rkha thha
        props.setLikedCourses((prev)=>prev.filter((cid)=>(cid!==props.data.id)));
       //props.likedCourses.filter((cid)=>(cid != props.data.id));
        toast.warning('like removed');
       }

       else{
        //dislike ho rkha thha
          if(props.likedCourses.length===0){
            props.setLikedCourses([props.data.id]);
          }
          else{
            props.setLikedCourses((prev)=>
                [...prev,props.data.id]
            );
          }
         toast.success('liked');
       }
    }

  return(
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden py-8'>
        <div className="relative">
            <img src={props.data.image.url} alt=''></img>
           
            <div className="w-[40px] h-[30px] bg-white rounded-full right-2 -bottom-3 grid place-items-center absolute">
                <button onClick={clickHandler}>
                {
                props.likedCourses.includes(props.data.id)?
                    <FcLike fontSize="1.75rem"/>
                :
                    <FcLikePlaceholder fontSize="1.75rem"/>
                }
                
                </button>
            </div>
        </div>
        <div>
            <p class="text-white tet-lg text-2xl leading-6 font-bold mx-2 pt-4" >{props.data.title}</p>
            <p class="mt-2 text-white mx-2 pb-9">{props.data.description.substring(0,100) + `...`}</p>
        </div>
        </div>
    
  );
}

export default Card;