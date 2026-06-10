import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="border p-3 w-50 h-100">
        <div className="border flex justify-center bg-amber-100">
          <div className="w-25 border ">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              className="w-full object-contain"
              alt=""
            />
          </div>
        </div>
        {/* content */}
        <div>hello bag</div>
      </div>
    </>
  );
}
export default Home;
