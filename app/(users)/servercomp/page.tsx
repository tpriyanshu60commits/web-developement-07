const ServerComp = async() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(URL);
    const data = await res.json();

  return (
    <>
      <h1>this is a servercomp page</h1>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((curEle:any , index:number)=>{
            return(
                <li key={index}>{curEle.body}</li>
            )
        })}
      </ul>
    </>
  );
};
export default ServerComp;
