// component/LogButton.tsx
'use client';
export default function LogButton(){
    return(
        <button className="btn btn-primary m-2"
        onClick={()=>console.log("Hi from LogButton!")}>
        Write Hi! to Log 
      </button>       
    )
};