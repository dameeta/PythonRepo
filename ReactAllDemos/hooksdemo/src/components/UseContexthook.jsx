
import React,{createContext,useContext} from 'react';

const MyContext = createContext();

const UseContexthook = () => {
  const sampleContext = useContext(MyContext);

  return <div>UseContexthook: {sampleContext}</div>;
}

export {UseContexthook,MyContext};