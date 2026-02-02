import HelloClass from "./Components/classComponent/HelloClass";
import { Counter } from "./Components/Counter";
import { User } from "./Components/User";
import { useState } from "react";

function App() {
  const [empname,setName] = useState("");
  const name = "Swami Narayan";
  
  return (
    <>
      <div style={{textAlign: "center", marginTop:"50px"}}>
      <h3>Input the emp Name</h3>
      <input type='text' placeholder='Enter employee name' 
      value={empname} onChange={(e) =>setName(e.target.value)}/>
      <h3>Hello , {empname}</h3>
      <HelloClass/>
      </div>
  
    {/* <Counter/> */}
    {
    /* <User username="RadheKrishna" email="radhekrishna@example.com"/>
    <User username="Hari" email="hari@example.com"/>
    <User username="Ghanashyam" email="ghanashyam@example.com"/> */}

    </>
  )
}

export default App
