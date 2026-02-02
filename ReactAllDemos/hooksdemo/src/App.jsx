import { useReducer } from 'react'
import ReducerHook from './components/ReducerHook';
function App() {
  const [count,dispatch]=useReducer(ReducerHook,0);

  const increment =()=>dispatch({type:"INCREMENT"});
  const decrement =()=>dispatch({type:"DECREMENT"});

  return (
    <>
      <div>
      <h2>Hello from App Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
     
    </>
  )
}

export default App
