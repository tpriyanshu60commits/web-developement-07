function Counter()
{
    let count = 0;
    const countIncrease = ()=>
    {
        count++;
        console.log(count);
        
    }

    return(
        <>
        <h1>counter</h1>
        <button onClick={countIncrease}>submit</button>
        </>
    )
}
export default Counter;