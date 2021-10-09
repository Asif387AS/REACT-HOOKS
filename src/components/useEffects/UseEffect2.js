import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
function UseEffect2() {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth=()=>{

        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',actualWidth);
        return ()=>{
            window.removeEventListener('resize',actualWidth);
        }
    }
    , [widthCount ])
    return (
        <div>
            <p>The Actual width of screen is </p>
            <h1>{widthCount}</h1>

        </div>
    )
}

export default UseEffect2
