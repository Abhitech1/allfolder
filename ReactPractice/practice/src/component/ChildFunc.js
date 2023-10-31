import React, { useState } from 'react'
export default function ChildFunc(props) 
{
    let[cdata,setdata]=useState(
        {
            rollno:101
        }
    )
    let newUpdate=()=>
    {
       props.senddata(cdata.rollno)
    }
  return (
    <>
    <div>Child={props.info}</div>
    <button onClick={newUpdate}>onClick</button>
    </>
  )
}
