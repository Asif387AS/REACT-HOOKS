import React from 'react'
import App from '../App'
import { useState } from 'react'
function BasicForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([ ])
    const submitForm=(e)=>{
        e.preventDefault();
        if(email && password){
        const newEntry={id:new Date().getTime().toString(),email:email,password:password};
        setAllEntry([...allEntry,newEntry])

        setEmail("");
        setPassword("");
    }
    else{
         alert('Plzz fill the form correctly');
        
    }
}

    return (
        <>
        <div className="container2 bg-dark">
          <form action="" onSubmit={submitForm}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email"  autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>
              <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="my-5">
              <button >Login</button> 
              </div>
              </form>  
             
               
              </div>
          <div>
          {
                      allEntry.map((currElem)=>{
                          return (
                              <div className="styleData" key={currElem.id}>
                              <p>{currElem.email}</p>
                              <p>{currElem.password}</p>
                              </div>
                          )
                      })
                  }
          </div>
                      </>
    )
}

export default BasicForm
