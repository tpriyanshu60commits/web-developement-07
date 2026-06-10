import { Link } from "react-router-dom";
import CravingsLogo from "../assets/images/CravingsLogo.png";
function Header() {
  return (
    <>
      <header className="h-16 bg-[#c2410c] flex justify-between items-center ">
        <div className="">
          <Link to="/">
            <img className="w-20 mx-12" src={CravingsLogo} alt="" />
          </Link>{" "}
        </div>
        <div className="flex gap-5  mr-9 ">
          <Link
            to="/login"
            className="text-white px-4 py-1.5 border-transparent border-0 hover:border border-white rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-[#c2410c] bg-white px-3 py-1.5 border border-transparent rounded hover:bg-transparent hover:border-white  hover:text-white transition"
          >
            Register
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
