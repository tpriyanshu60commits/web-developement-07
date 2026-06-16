import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitButton = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <>
      <label>Username</label>
      <br />
      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login </button>
    </>
  );
}
export default Login;
