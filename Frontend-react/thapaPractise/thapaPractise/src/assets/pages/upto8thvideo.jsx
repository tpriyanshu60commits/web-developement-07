import { Fragment, useState } from "react";
const Upto8thvideo = () => {
  const [name, newname] = useState(" priyanshu tiwari");
  return(
  <Fragment>
    <NetflixCards />
    {/* <NetflixCards />
             <NetflixCards />
             <NetflixCards />
             <NetflixCards />
             <NetflixCards /> */}
    <Hello />
  </Fragment>
  )
};
export default Upto8thvideo;

const NetflixCards = () => {
  let age = 85;
  let canWatch = "available";
  if (age <= 18) canWatch = "not available";
  // if (age < 18) {
  //   return (
  //     <>
  //       <h1>hello , {name}</h1>
  //       <button
  //         onClick={() => {
  //           newname("this is new one");
  //         }}
  //       >
  //         submit
  //       </button>
  //       <hr />
  //       <div>
  //         <img src="favicon.svg" alt="" width={1000} height={400} />
  //         <h2>react icon</h2>
  //         <p>it is a react icon</p>
  //         <button>not available</button>
  //       </div>
  //     </>
  //   );
  // } else
  {
    return (
      <>
        <h1>hello , {name}</h1>
        <button
          onClick={() => {
            newname("this is new one");
          }}
        >
          submit
        </button>
        <hr />
        <div>
          <img src="favicon.svg" alt="" width={1000} height={400} />
          <h2>react icon</h2>
          <p>it is a react icon</p>
          {/* <button>{age>=18 ? "available" : "not available"}</button> */}
          <button>{canWatch}</button>
        </div>
      </>
    );
  }
};
const Hello = () => {
  const name = "newname";
  const greet = () => {
    return "good morning";
  };
  return (
    <>
      <h1>{name}</h1>
      <h1>{4 + 5 - 8}</h1>
      <h1>{greet()}</h1>
    </>
  );
};
