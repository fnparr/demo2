// component/LogButton.tsx
'use client';
export default function LogButton(){
    return(
        <button className='px-5 py-2 text-white bg-blue-500 border-2'
        onClick={()=>console.log("Hi from LogButton!")}>
        Write Hi! to Log 
      </button>       
    )
};