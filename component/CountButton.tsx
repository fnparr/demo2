// component/CountButton.tsx
'use client';
import {useState} from "react";

export default function CountButton(){
    // Create a state
    const[counter,setCounter]=useState(0);

    return(
        <button className="btn btn-primary m-2"
  //      <button className='btn text-white bg-blue-500 m-2'
        onClick={()=>setCounter(prevCount => prevCount+1)}>
        Counter value: {counter}  
      </button>       
    )
};