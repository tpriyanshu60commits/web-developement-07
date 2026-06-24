import Header from "./assets/Header";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upto8thvideo from "./assets/pages/upto8thvideo";
import Video9ConditionalStatement from "./assets/pages/video9(conditionalStatement)";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/upto8thvideo" element={<Upto8thvideo />} />
          <Route path="/video9ConditionalStatement" element={<Video9ConditionalStatement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
