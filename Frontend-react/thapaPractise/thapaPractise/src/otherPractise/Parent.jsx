// q1
// import Child from "./Child"
// const Parent = () => {
//   return (
//       <>
//       </>
//   )
// }

// export default Parent;

// q2
// import Child from "./Child"
// function Parent()
// {
//     return(
//         <>
//         <Child name="Priyanshu" age={22}/>
//         </>
//     )
// }
// q3
import Student from "./Child";
function Parent() {
  return (
    <>
    {/* q3 */}
      {/* <Student name="Aman" />
      <Student name="Priya"/> 
      <Student name="Riya"/>  */}
      {/* q4 */}
      <Student name="Priyanshu" salary={100000} city="Noida"/>
    </>
  );
}
export default Parent;
