import { Link } from "react-router-dom";
import loginpage from "../assets/images/loginpage.webp";
import { FaEye } from "react-icons/fa";
function Login() {
  return (
    <>
      <div className="h-[90vh] relative flex justify-start">
        <img
          src={loginpage}
          alt=""
          className="h-full w-full object-cover absolute"
        />

        <div className=" w-110 relative p-8 rounded-lg bg-white h-[70vh] m-22">
          <h1 className="text-[var(--color-primary)] font-bold text-center text-3xl">
            Welcome Back
          </h1>
          <p className="text-center opacity-50 mt-2">
            Login to your Cravings account
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex gap-2 flex-col relative">
              <label htmlFor="" className="font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-1.5 rounded px-2.5 shadow-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] "
                placeholder="Enter your password"
              />
              <FaEye className="absolute right-4 top-11 cursor-pointer " />
            </div>
            <div className="flex justify-between mt-2.5">
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
            </div>
            <div className="mt-4">
              <button className="w-full cursor-pointer rounded p-3 font-medium text-white bg-[var(--color-primary)]">
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
  );
}
export default Login;
