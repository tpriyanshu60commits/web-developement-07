const Video12LoopsMap = () => {
  const q1 = [10, 20, 30, 40];
  const q2 = [5, 10, 15];
  const q3 = [2, 4, 6];
  const q4 = ["apple", "banana", "mango"];
  const q5 = ["Ram", "Shyam", "Mohan"];
  const q6 = ["Delhi", "Mumbai", "Pune"];
  const q7 = [
    { name: "Ram", age: 20 },
    { name: "Shyam", age: 21 },
    { name: "Mohan", age: 22 },
  ];
  const q8 = ["Apple", "Banana", "Mango"];
  return (
    <>
      {
        // q1
        q1.map((item) => {
          return <h1>{item}</h1>;
        })
      }
      {
        //   q2
        q2.map((item) => {
          return <h4>{item + 1}</h4>;
        })
      }
      {
        // q3
        q3.map((item) => {
          return <h4>{item.toString()}</h4>;
        })
      }
      {
        // q4
        q4.map((item) => {
          return <h4>{item.toUpperCase()}</h4>;
        })
      }
      {
        // q5
        q5.map((item) => {
          return <h4>{"hello " + item}</h4>;
        })
      }
      {
        // q6
        q6.map((item) => {
          return <h4>{item + " city"}</h4>;
        })
      }
      {
        // q7
        q7.map((item) => {
          return <h4>{item.name + item.age}</h4>;
        })
      }
      {q7.map((item) => {
        return <h4>{item.name + " is " + item.age + " years old"}</h4>;
      })}
      {
        // q8
        q8.map((item)=>
        {
            return <h4>{item}</h4>
        })
      }
    </>
  );
};
export default Video12LoopsMap;
