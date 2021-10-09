import React from 'react'

export default function RulesHook() {
    const [myName, setMyName] = React.useState("Asif")
    return (
        <div>
                <h1>{myName}</h1>
        </div>
    )
}

// use hooks inside function not in return statement or other
// you can use compoents file name in camel case or pascal case but function inside file must be pascal case
// we can use useState as React.useState() instead of it importing
// hooks cannot be used inside the condtionl structure or loop 