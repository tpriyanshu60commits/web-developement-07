import { useEffect, useState } from "react";

function Class46() {
    // const [count , updateCount] = useState(0);
    // useEffect(()=>
    // {
    //     console.log("count changed");
        
    // },[count])

    const [name , updatename] = useState("");

  return (
    <>
    {/* <h1>{count}</h1>
    <button onClick={()=>updateCount(count+1)}>click me</button> */}
    <h2>{name}</h2>
    <input type="text" onChange={(e)=>updatename(e.target.value)} />
    </> 
  );
}
export default Class46;
