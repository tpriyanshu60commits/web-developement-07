import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./Pages/Login1";
import Register from "./Pages/Register";
import UseEffect from "./Pages/UseEffect";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
    {/* <Register/> */}
     <Login1/>
    {/* <UseEffect/> */}
    <Routes>
      {/* <Route path="/" element={<Login1 />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;