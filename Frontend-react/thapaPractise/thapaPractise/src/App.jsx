import Header from "./components/Header";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upto8thvideo from "./assets/pages/upto8thvideo";
import Video9ConditionalStatement from "./assets/pages/Video9(conditionalStatement)";
import Video11ImportExport ,{ Hello , Footer } from "./assets/pages/Video11ImportExport";
import Video12LoopsMap from "./assets/pages/Video12LoopsMap";
import Exporting,{ UptoVideo12Practise } from "./assets/pages/UptoVideo12Practise";
import Video12NetfilxCards from "./assets/pages/Video12NetfilxCards";
import Video13Props from "./assets/pages/Video13Props";
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
          <Route path="/uptoVideo12Practise" element={<><UptoVideo12Practise/><Exporting/></>} />
          {/* <Route path="/video12NetfilxCards"element={<Video12NetfilxCards/>}/> */}
          {/* Props */}
          <Route path="/Video13Props"element={<Video13Props/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
