import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

function Home() {
  return (
    <>
      <div className="border p-3 w-full ">
        {/* box-1 */}
        <div className="border rounded-lg overflow-hidden w-70 h-full flex flex-col items-center gap-2">
          <div className="bg-[#F6F6F6] w-full">
            <div className="w-full h-40  ">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
          {/* content */}
          <div className="p-1.5 flex flex-col  gap-1">
            <p className="font-medium text-sm">
              WelTherm 2-in-1 Air Cooler & Heater with 10L Water Tank, Ice
              Crystal Boxes, Remote Control, Digital LED Touch Panel, 3 Speeds,
              Swing, 12H Timer & Ionizer, AW-Ultima
            </p>
            {/* for stars */}
            <div className="flex flex-row ">
              <p className="me-1">5.0</p>
              <div className="flex gap-0">
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaAngleDown />
                <p>(2)</p>
              </div>
            </div>
            <div>
              <button className="bg-[#CC0C39] p-1 rounded text-white font-medium text-sm">
                Limited time deal
              </button>
            </div>
            {/* price */}
            <div className="flex ">
              <div className="flex items-start">
                <span className="text-lg">₹</span>
              </div>
              <span className="text-3xl">10,500</span>
              <div className="flex items-end ms-1">
                <span className="text-sm">
                  M.R.P: <span className="line-through">₹19000</span>
                </span>
              </div>
            </div>
            <p>(47% off)</p>
            <p className="opacity-80">Up to 5% back with Amazon Pay I...</p>
            <div className="flex">
              <p>FREE Delivery</p>
              <span className="font-bold ms-1">Mon, 15 Jun</span>
            </div>
            <button className="bg-[#FFD814] rounded-2xl p-1 mb-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* box 2 */}
      <div className=" mt-2 w-full h-85">
        <div className="h-65 w-200 ">
          <div className="flex p-2 border border-gray-300">
            <div className="h-full w-40  bg-[#F7F7F7] p-3 ">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                alt=""
              />
            </div>
            <div className=" flex-1 p-1 flex flex-col gap-1 border border-gray-300">
              <p className="flex items-center gap-1 opacity-75">
                Sponsered <HiInformationCircle className="" />
              </p>
              <p className="text-sm font-medium">
                Portable Air Cooler Fan for Home & Office | ABS Plastic Mini
                Cooling Fan with Quiet High Efficiency Airflow | Lightweight
                Personal Desk Air Cooler | Compact Portable Design (Pack)
              </p>
              <div className="flex ">
                <div className="flex items-start">
                  <span className="text-lg">₹</span>
                </div>
                <span className="text-3xl">10,500</span>
                <div className="flex items-end ms-1">
                  <span className="text-sm">
                    M.R.P: <span className="line-through">₹19000</span>
                  </span>
                  <p className="ms-2">(76% off)</p>
                </div>
              </div>
              <div className="flex align-baseline gap-1">
                <button className="bg-[#7FDA69] p-0.5">Save 5%</button>
                <p>with coupon</p>
              </div>
              <div className="flex">
                <p>FREE Delivery</p>
                <span className="font-bold ms-1">Mon, 17 Jun</span>
              </div>
              <button className="bg-[#FFD814] rounded-2xl p-1 mb-2 w-50">
              Add to cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
