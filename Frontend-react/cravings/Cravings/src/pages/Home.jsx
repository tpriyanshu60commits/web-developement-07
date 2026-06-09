import { FaSearch } from "react-icons/fa";
import CravingsLogo from "../assets/images/CravingsLogo.png";
import heroSectionBackground from "../assets/images/heroSectionBackground.jpg";
function Home() {
  return (
    <>
      <header className="h-16 bg-[#c2410c] flex justify-between items-center ">
        <div className="">
          <img className="w-20 mx-12" src={CravingsLogo} alt="" />
        </div>
        <div className="flex gap-5  mr-5 ">
          <button className="text-white px-4 py-1.5 border-transparent border-0 hover:border border-white rounded">
            Login
          </button>
          <button className="text-[#c2410c] bg-white px-3 py-1.5 border border-transparent rounded hover:bg-transparent hover:border-white  hover:text-white transition">
            Register
          </button>
        </div>
      </header>

      {/* hero section */}
      <section className="relative heroSection bg-amber-500 h-[85vh]">
        <img
          src={heroSectionBackground}
          alt=""
          className="absolute h-full w-full object-cover brightness-60"
        />
        <div className="text-white relative border flex justify-center items-center h-full">
          <div className="border p-3 h-90 w-200">
            <h1 className="text-6xl text-center font-medium">
              Your Favorite Food,
              <br /> Delivered Fast
            </h1>
            <p className="opacity-90 m-3 text-center text-xl">Order from thousands of restaurants and get it delivered to your doorstep</p>
            <div className="flex gap-3">
              <button className="text-white bg-[var(--color-primary)] px-5 py-3 rounded font-medium hover:bg-[var(--)]">Sign Up</button>
              <button className="text-black bg-[var(--color-neutral-content)] px-5 py-3 rounded font-medium">Order Now</button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
export default Home;
