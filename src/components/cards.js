import React,{useState} from "react";
import Card from './card';
import Empty from './empty'
function Cards(props){

    const getCourses=()=>{
        if(props.category==='All'){
            let allCourses=[];
               Object.values(props.coursesData).forEach((courseCategory)=>{
                  courseCategory.forEach((course)=>{
                    allCourses.push(course);
                  })
               })
               return allCourses;
            }
        else{
            return props.coursesData[props.category];
        }    
           }
    
  

  
    const [likedCourses,setLikedCourses]=useState([]);

    if(props.coursesData.length===0){
        return(
           <Empty>
            console.log(props.coursesData);
           </Empty>
        );
    }
    return(
        <div className='justify-center gap-4 mb-4 flex-wrap flex'>
        { 
            getCourses().map((course)=>{
                return(
                    <Card key={course.id} data={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                )
            })
        }
        </div>
    );
}

export default Cards;