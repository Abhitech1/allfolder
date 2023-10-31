import React, { useState } from 'react'
import ChildFunc from "./ChildFunc"

export default function ParentFunc()
 {
    let[state,setupdate]=useState({
        name:"amit",
        child:""        
    })
    let recive=(value)=>
    {
        setupdate({
            child:value
        })
    }
    let update=()=>
    {
          setupdate(
            {
                name:"vicky"
            }
          )
    }
  return (
   <React.Fragment>
      <div>Parent={state.name} {state.child}</div>
      <ChildFunc info={state.name} senddata={recive}/>
      <button onClick={update}>click</button>
      </React.Fragment>
  )
}

