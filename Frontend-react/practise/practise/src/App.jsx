import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./Pages/Login1";
import Register from "./Pages/Register";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
    <Register/>
    <Routes>
      {/* <Route path="/" element={<Login1 />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;