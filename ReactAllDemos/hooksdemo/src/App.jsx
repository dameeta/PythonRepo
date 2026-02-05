import { useReducer } from 'react'
import ReducerHook from './components/ReducerHook';
import UseRefHook from './components/UseRefHook';
import {UseContexthook,MyContext} from './components/UseContexthook';
import UseEffectHook from './components/UseEffectHook';
import UseMemoHook from './components/UseMemoHook';
function App() {
  const [count,dispatch]=useReducer(ReducerHook,0);

  const increment =()=>dispatch({type:"INCREMENT"});
  const decrement =()=>dispatch({type:"DECREMENT"});

  return (
    <>
      <div>
      {/* <h2>Hello from App Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <UseRefHook />
      <MyContext.Provider value="Hello from Context!">
        <UseContexthook />
      </MyContext.Provider>
      <UseEffectHook/>
       */}
      <UseMemoHook/>
      </div>
     
    </>
  )
}

export default App
