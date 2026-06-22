import { useState } from "react";

const App = ()=>
{
  const[ name , newname] = useState(" priyanshu tiwari"); 

  return(
    <>
    <h1>hello , {name}</h1>
    <button onClick={()=>{newname("this is new one")}}>submit</button>
    <hr />
    <div>
      <img src="favicon.svg" alt="" width={1000} height={400} />
      <h2>react icon</h2>
      <p>it is a react icon</p>
    </div>
    </>
  )
}
export default App;