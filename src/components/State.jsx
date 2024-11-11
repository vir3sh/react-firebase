import React, {  useEffect, useLayoutEffect } from 'react' 
function State(){


  useEffect(()=>{
    console.log("message from effect")  
  })
  
  useLayoutEffect(()=>{
    console.log("message from layout")
  })
  
  return(
    <>
    <h2>text </h2>
    </>
  )
}

export default State;