
import './App.css';
import React from 'react'
import { useState } from 'react'
import compA from './components/compA';
import RulesHook from './components/rulesHook';
import UseArrayState from './components/UseArrayState';
import UseStateData from './components/UseStateData';
import ShortCirEva from './components/ShortCirEva';
import BasicForm from './components/BasicForm';
import UseEffect1 from './components/useEffects/UseEffect1';
import UseEffect2 from './components/useEffects/UseEffect2';

export default function App() {
  
  // console.log(useState());
  // let val='Asif ki Quiin and';
  const [myName,setMyName]=useState('asif technical tech')
  const changeName=()=>{
    myName==='asif technical tech'? setMyName('Quiin technical'):setMyName('asif technical tech')
    // setMyName('Quiin technical')
    // val="Technical Quiin"
  }
  // setMyName('asif technical')

  return (
    <>
      <compA/>
    <div>
    {/* <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click Me Plzz</button> */}
      {/* <RulesHook/> */}
      {/* <UseArrayState/> */}
      {/* <UseStateData/> */}
      {/* <ShortCirEva/> */}
      {/* <BasicForm/>  */}
      {/* <UseEffect1/> */}
      <UseEffect2/>
    </div>
    </>
  )
}
