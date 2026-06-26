import Header from "./components/Header";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upto8thvideo from "./assets/pages/upto8thvideo";
import Video9ConditionalStatement from "./assets/pages/video9(conditionalStatement)";
import Video11ImportExport ,{ Hello , Footer } from "./assets/pages/Video11ImportExport";
import Video12LoopsMap from "./assets/pages/Video12LoopsMap";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/upto8thvideo" element={<Upto8thvideo />} />
          <Route path="/video9ConditionalStatement" element={<Video9ConditionalStatement />} />
          <Route path="/video11ImportExport" element={<><Video11ImportExport /><Hello/><Footer/></>} />
          <Route path="/video12LoopsMap" element={<Video12LoopsMap/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
