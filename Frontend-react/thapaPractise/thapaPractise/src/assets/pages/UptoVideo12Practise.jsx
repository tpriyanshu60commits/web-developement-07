import { Fragment } from "react/jsx-runtime";



export const UptoVideo12Practise=()=>
{
    const name = "priyanshu";
    let age = 56;
    let scores = 54;
    const q1 = [10, 20, 30, 40];  
    const q4 = ["apple", "banana", "mango"];
    const q7 = [
    { name: "Ram", age: 20 },
    { name: "Shyam", age: 21 },
    { name: "Mohan", age: 22 },
  ];
    function scoreShow()
    {
        if(scores>100)return "good score";
        return "not good score"
    }

    function hello()
    {
        return "helloji";
    }
    return(
        <Fragment>
            <h1>Hello dear {name,age}</h1>
            <h1>{hello()}</h1>
            <h1>{age<18?"cannot Watch":"can watch"}</h1>
            <h1>{scoreShow()}</h1>
            {
                q1.map((item)=>
                {
                    return <h1>{item}</h1>;
                })
            }
            {
                q4.map((item)=>
                {
                    return <h1>{item}</h1>
                })
            }
            {
                q7.map((item)=>
                {
                    return <h1>{item.name + item.age}</h1>
                })
            }
        </Fragment>
    );
}

function Exporting()
{
    return(
        <>
            <h1>this is a exporting function </h1>
        </>
    );
}
export default Exporting;
