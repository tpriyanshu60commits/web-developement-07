import { useState } from "react";
function Register() {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fullName : ", fullName);
    console.log("email : ", email);
    console.log("number : ", number);
    console.log("password : ", password);
  };

  return (
    <>
      <div className="d-flex justify-content-center  mt-3 p-3">
        <div className="w-50 border rounded p-3">
          <h1 className="text-danger text-center">Create Account</h1>
          <p className="opacity-75 text-center">Join us as a Customer</p>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column">
              <label htmlFor="fullName" className="fw-bold">
                FullName:
              </label>
              <input
                type="text"
                placeholder="write your name..."
                className="form-control"
                name="fullName"
                onChange={(e)=> setfullName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="email" className="fw-bold">
                Email:
              </label>
              <input
                type="email"
                placeholder="write your email..."
                className="form-control"
                name="email"
                onChange={(e)=> setemail(e.target.value)}

              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="number" className="fw-bold">
                Mobile Number:
              </label>
              <input
                type="number"
                placeholder="write your number..."
                className="form-control"
                name="number"
                onChange={(e)=> setnumber(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="password" className="fw-bold">
                Password:
              </label>
              <input
                type="password"
                placeholder="write your password..."
                className="form-control"
                name="password"
                onChange={(e)=> setpassword (e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mx-auto">
              Register
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
