import React, { useState, useMemo} from 'react'

function showCal(num){
  console.log("calculating...");
  for( let i=0;i<10;i++){
    console.log(i);
  } 
  return num * 2;
}


function UseMemoHook() {
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return showCal(number);
  }, [number]);//recalculate only when number changes

  return (
    <div style={{background:dark ? "#333" : "#fff"}}>
      <h2>Number : {number}</h2>
      <h3>Double Number : {doubleNumber}</h3>
      <button onClick={()=>setNumber(number+1)}>Increment</button>
      <button onClick={()=>setDark(!dark)}>Change Theme</button>
    </div>);
}

export default UseMemoHook