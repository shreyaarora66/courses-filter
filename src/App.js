import React,{useState} from "react";
import {useEffect} from 'react';
import NavBar from './components/navbar';
import Filter from './components/filter';
import Cards from './components/cards';
import {apiUrl,filterData} from './data';
import {toast} from 'react-toastify';
import Spinner from './components/Spinner'


const App = () => {
  const [courses,setCourses]=useState('');
  const [Loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
    async function fetchdata(){
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const data= await res.json();
        setCourses(data.data);
        console.log(courses);
      }
      catch(error){
        toast.error('something went wrong!!')
      }
      setLoading(false);
    }
   useEffect(()=>{
      fetchdata();
   },[])
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2 ">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="bg-bgDark2 ">
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className='w-11/12 flex-wrap max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
      {
        Loading ? (<Spinner/>):(<Cards coursesData={courses} category={category}></Cards>)
      }
      </div>
      </div>
      
    </div>
  );
};

export default App;
