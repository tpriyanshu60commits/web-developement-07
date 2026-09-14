import React from "react";

const SingleProfile = async(props) => {
    const user = await props.params;
    console.log(user)
  return (
    <>
      <div className="text-4xl">Dynamic</div>
    </>
  );
};

export default SingleProfile;
