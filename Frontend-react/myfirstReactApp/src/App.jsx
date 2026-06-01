import Header from "./compenets/Header";
import Footer from "./compenets/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
