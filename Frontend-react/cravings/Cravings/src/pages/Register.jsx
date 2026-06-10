import { Link } from "react-router-dom";
import loginpage from "../assets/images/loginpage.webp";
import { FaEye } from "react-icons/fa";
function Register() {
  return (
    <>
      <>
        <div className="h-[90vh] relative flex justify-end ">
          <img
            src={loginpage}
            alt=""
            className="h-full w-full object-cover absolute"
          />

          <div className=" w-110 relative p-8 rounded-lg bg-white flex flex-col gap-3 h-[85vh] me-20 mt-5">
            <h1 className="text-[var(--color-primary)] font-bold text-center text-3xl">
              Create Account
            </h1>
            <p className="text-center opacity-50 ">
              Join us as a Customer, Restaurant, or Rider
            </p>

            <div className="flex flex-col gap-3">
                <label className="font-medium">Register as:</label>
                <div className="flex gap-2">
                    <input type="radio" name="registerAs" value="customer" />Customer
                    <input type="radio" name="registerAs" value="restaurant" />Restaurant
                    <input type="radio" name="registerAs" value="rider" />Rider
                </div>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter your email"
              />
              <input
                type="number"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter your phone number"
              />
              <input
                type="password"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter your password"
              />
              <input
                type="password"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Confirm your password"
              />

              <div className="flex gap-2">
                <input type="checkbox" className="opacity-60" />
                <span className="text-gray-500 cursor-pointer">
                  I agree to the{" "}
                  <span className="text-[var(--color-primary)] hover:underline">
                    <Link to="" className="">
                      terms and conditions.
                    </Link>
                  </span>
                </span>
              </div>

              <div className="mt-4">
                <button className="w-full cursor-pointer rounded p-3 font-medium text-white bg-[var(--color-primary)]">
                  Register
                </button>
              </div>
              <div className="text-center flex justify-center">
                <div>
                  <p className="text-gray-500">Already registered?</p>
                </div>
                <div>
                  <Link
                    to=""
                    className="text-[var(--color-primary)] hover:underline cursor-pointer font-medium"
                  >
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Register;
