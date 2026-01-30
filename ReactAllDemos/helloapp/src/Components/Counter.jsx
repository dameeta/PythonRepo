import { useState } from "react";

export const Counter = () => {
  const [ctr,setctr]= useState(0);
  
  const incre= () =>{
    setctr(ctr+1);
  }
  const decre = () =>{
    setctr(ctr-1)
  }

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h2>Counter Component</h2>
      <h3>{ctr}</h3>
      <button onClick={incre}>increase</button>
      <button onClick={decre}>decrease</button>
    </div>
  );
};