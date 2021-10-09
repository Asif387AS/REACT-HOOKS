import React from 'react'
import { useState } from 'react'

export default function UseStateData() {
    const changeObject=()=>{
        setObject.age===24? setMyObject({...setObject,age:25}):setMyObject({...setObject,age:24})

    }
    const [setObject, setMyObject] = useState({name:"asif",age:24,Degree:"BSCS"})
    return (
        <div>
            <h1 className="h1style">Name:{setObject.name} & AGE: {setObject.age} & Degree:{setObject.Degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    )
}
