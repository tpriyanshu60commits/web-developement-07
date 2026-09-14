"use client";

import { useEffect, useState } from "react";
import Counter from "./counter";
const ClientComp = () => {

  type Post = {
    userId: number;
    id: number;
    title: string; 
    body: string;
  };
  const [postData, setPostData] = useState<Post[]>([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setPostData(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello , this is my ClientComp next application page</h1>
      <button className="bg-red-500 p-5 mx-auto" onClick={() => alert("hii")}>
        Home page button
      </button>
      <Counter/>
      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem, index) => {
          return (
            <li key={index}>
              <h2>{curElem.title}</h2>
              <p>{curElem.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ClientComp;
