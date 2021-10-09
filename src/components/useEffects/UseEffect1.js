import React from 'react'
import { useEffect,useState } from 'react';
function UseEffect1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
    if(count>=1){
        document.title=`chats (${count})`
    }
    else{
        document.title=`chats`
    }
        console.log('This is the useeffect 1');
        
      },[count] )
      
  
    useEffect(() => {
  console.log("Hi this is the useeffect2") 
      },[] )

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click😀</button>
        </div>  
    )}

export default UseEffect1
