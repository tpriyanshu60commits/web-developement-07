import { Link } from "react-router-dom";
import loginpage from "../assets/images/loginpage.webp";
import { FaEye } from "react-icons/fa";
function Register() {
  return (
    <>
      <>
        <div className="h-[90vh] relative flex justify-end">
          <img
            src={loginpage}
            alt=""
            className="h-full w-full object-cover absolute"
          />

          <div className=" w-110 relative p-8 rounded-lg bg-white m-22">
            <h1 className="text-[var(--color-primary)] font-bold text-center text-3xl">
              Create Account
            </h1>
            <p className="text-center opacity-50 mt-2">
              Join us as a Customer, Restaurant, or Rider
            </p>

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
                  type="text"
                  className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="Enter your email"
                />
                 <input
                  type="text"
                  className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="Enter your email"
                />
             

              
                <div className="flex gap-2">
                  <input type="checkbox" className="opacity-60" />
                  <span className="opacity-60">Remember me</span>
                </div>
                <div>
                  <Link
                    to=""
                    className="text-[var(--color-primary)] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </Link>
                </div>
             
              <div className="mt-4">
                <button className="w-full  rounded p-3 font-medium text-white bg-[var(--color-primary)]">
                  Login
                </button>
              </div>
              <div className="flex items-center gap-2 my-4">
                <div className="flex-1 border opacity-25"></div>
                <div className="text-gray-500">Don't have an account?</div>
                <div className="flex-1 border opacity-25"></div>
              </div>
              <div className="text-center">
                <Link
                  to=""
                  className="text-[var(--color-primary)] hover:underline cursor-pointer font-medium"
                >
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Register;
