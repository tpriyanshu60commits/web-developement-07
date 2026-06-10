import { FaSearch } from "react-icons/fa";
import CravingsLogo from "../assets/images/CravingsLogo.png";
import heroSectionBackground from "../assets/images/heroSectionBackground.jpg";
function Home() {
  return (
    <>
      {/* hero section */}
      <section className="relative heroSection bg-amber-500 h-[85vh]">
        <img
          src={heroSectionBackground}
          alt=""
          className="absolute h-full w-full object-cover brightness-60"
        />
        <div className="text-white relative flex justify-center items-center h-full">
          <div className=" p-3 h-90 w-250">
            <h1 className="text-6xl text-center font-medium">
              Your Favorite Food,
              <br /> Delivered Fast
            </h1>
            <p className="opacity-90 m-3 text-center text-xl">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>
            <div className="flex gap-3 justify-center mt-7">
              <button className="text-white bg-[var(--color-primary)] px-5 py-3 rounded font-medium hover:bg-[var(--)]">
                Sign Up
              </button>
              <button className="text-black bg-[var(--color-neutral-content)] px-5 py-3 rounded font-medium">
                Order Now
              </button>
            </div>
            <div className="flex bg-white text-black gap-3 p-2 rounded mt-7 items-center">
              <FaSearch className="text-gray-500 bg-white size-5" />
              <input
                type="text"
                placeholder="Search restaurents or dishes..."
                className="w-full border-none outline-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
