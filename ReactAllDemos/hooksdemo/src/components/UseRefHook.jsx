// access for input element it store the value without re-render
import React from 'react'

export default function UseRefHook() {

  const inputRef = React.useRef(null);
  const focusinput = () =>{
    inputRef.current.focus();
  };
  return (
    <div>UseRefHoo
      <input ref={inputRef} type="text" placeholder='Enter something' />
      <button onClick={focusinput}>Focus</button>
      
    </div>
  )
}
