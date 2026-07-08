import React from "react";

const Video16ChildComponent = ({ items }) => {
  const { name, age, college, rating } = items;
  return (
    <>
      <ul>
        <li>
          <p>{name}</p>
          <p>{age}</p>
          <p>{college}</p>
          <p>{rating}</p>
        </li>
      </ul>
    </>
  );
};

export default Video16ChildComponent;
