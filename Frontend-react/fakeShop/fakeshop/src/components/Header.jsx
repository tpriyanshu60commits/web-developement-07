import { Link } from "react-router-dom";
import { FaLuggageCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex p-4 bg-blue-900 justify-between">
        <div>
          <FaLuggageCart className="text-2xl text-white" />
        </div>
        <div className="">
          <Link to="/home" className="text-white hover:underline">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
