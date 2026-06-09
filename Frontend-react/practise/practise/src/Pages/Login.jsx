import { useState } from "react";
function Login()
{
    const[username , setUsername] = useState("");
    const[password , setPassword] = useState("");

    const submitButton = (event)=>
    {
        event.preventDefault();
        console.log(username);
        console.log(password);
    }
    return(
        <>
        <label>Username</label>
        <br />
        <input type="text" placeholder="Enter your name..." />
        
        </>

    );
}
export default Login;