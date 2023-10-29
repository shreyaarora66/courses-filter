import React from "react";
function Filter(props){
    function filterHandler(title){
        props.setCategory(title);
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max mx-auto py-4 justify-center gap-y-4 space-x-4">
        {
        props.filterData.map((data)=>{
            return(
                <button onClick={()=>{filterHandler(data.title)}}
                className={`text-lg rounded-md px-2 py-1  font-medium text-white bg-black hover:bg-opacity-50 
                ${props.category===data.title?"border-2 bg-opacity-60":"border-0 bg-opacity-40"}`}
                key={data.id}>{data.title}</button>
                )
            }) 
            }
        </div>
       
    );
}

export default Filter;