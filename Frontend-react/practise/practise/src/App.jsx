import { Routes, Route } from "react-router-dom";
import Login1 from "./Pages/Login1";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;