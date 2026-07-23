import React from "react";
import Register from "./pages/Register";
import { Route , Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App;
