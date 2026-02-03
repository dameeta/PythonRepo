import { useEffect, useState } from "react"

function UseEffectHook (){
  const [count,setCount]= useState(0);


  useEffect(()=>{
    console.log("Component  is loaded..",count)
  },[count]);


  return <div><h2>UseEffectHook Component Count: {count}</h2>
  <button onClick={()=>setCount(count+1)}>+</button>
  </div>;

}
export default UseEffectHook;