import React from 'react'
import { useState } from 'react'
export default function UseArrayState() {
    const bioData=[
        {
            id:1,name:"asif",age:12
        },
        {
            id:2,name:"quiin",age:14
        },
        {
            id:3,name:"Churail",age:14
        },
    ]
const [array, setarray] = useState(bioData)

    console.log(bioData)
    const clearData=()=>{
        // bioData=[];
        setarray([]);
    }
    const removeElem=(id)=>{
        // alert(id)
        const myNewArray=array.filter((currEle)=>{
            return currEle.id !=id;
        })
        setarray(myNewArray)
    }
    return (
        <>
        <div className="container">
        {
             array.map((currVal)=>{
               return(
                   <h1 className="h1History" key={currVal.id}>Name:{currVal.name}, id:{currVal.id} & Age:{currVal.age}
                             <button className="btn btn-danger mx-2 mt-2" onClick={()=>removeElem(currVal.id)}>Remove</button>
                   </h1>
         
               );
             }) 
            }
            <button className='btn btn-primary' onClick={clearData}>Clear</button>
            </div>
        </>
    )
}
