import { useState } from "react";
function Counter() {
  const[count , setCounter] = useState(0);

  const updateValue = ()=>
  {
    setCounter(count+1);
    console.log(count);
    
  }
  

  return(
      <>
        <h1>{count}</h1>
        <button onClick={updateValue}>update</button>
      </>
    
  );

}
export default Counter;
