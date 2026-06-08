import Cravingslogo from "./images/Cravingslogo.png";
import herosectionbackground from "./images/herosectionbackground.jpg";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <>
      <header className="h-16 bg-[#c2410c] flex justify-between items-center ">
        <div className="">
          <img className="w-20 mx-12" src={Cravingslogo} alt="" />
        </div>
        <div className="flex gap-5  mr-5 ">
          <button className="text-white px-4 py-1.5 border-transparent border-0 hover:border border-white rounded">
            Login
          </button>
          <button className="text-[#c2410c] bg-white px-3 py-1.5 border border-transparent rounded hover:bg-transparent hover:border-white  hover:text-white transition">Register</button>
        </div>
      </header>

      {/* hero section */}
      {/* <section className="heroSection d-flex justify-content-center align-items-center">
        <div className=" text-light w-50 p-2">
          <h1 className="text-center fw-bolder">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>
          <p className="text-center opacity-75 fs-5 mb-4">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <button
              id="heroSectionSignupButton"
              className="px-4 py-2 rounded fw-medium"
            >
              Sign Up
            </button>
            <button
              id="heroSectionOrderNowButton"
              className="px-4 py-2 rounded fw-medium"
            >
              Order Now
            </button>
          </div>
          <div className=" border-4 p-2 rounded-3 w-100">
            <div className="d-flex bg-white text-black rounded border-0">
              <FaSearch className="searchIcon my-auto mx-2" />
              <input
                type="text"
                className="form-control shadow-none border-0 p-2"
                placeholder=" search restaurant or cuisines..."
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default Header;
