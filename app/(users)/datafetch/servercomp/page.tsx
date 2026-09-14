import React from "react";

const datafetchServer = async(props:any) => {
    const searchparams = await props.searchParams;
    const userName = searchparams.name;

    const URL=(`https://api.genderize.io/?name=${userName}`);
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
  return (
    <>
      <div>datafetchServer:{data.name}</div>
    </>
  );
};

export default datafetchServer;
