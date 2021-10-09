import React from 'react'
import { useState } from 'react'

function ShortCirEva() {
    const [Demo, setDemo] = useState("")
    return (
        <div>
         <h1>{Demo || 
         <>
         <h1>This is the heading 1</h1> 
         <h2>This is the headin 2</h2> 
         </>}</h1>
         <h1>{Demo && "technical"}</h1>
        </div>
    )
}

export default ShortCirEva
