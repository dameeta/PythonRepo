import React from "react";

export default function ReducerHook(count,action){
if(action.type==="INCREMENT"){
    return count+1;
}
else if(action.type==="DECREMENT"){
    return count-1;
}

  return count;
  }
