import React, { useContext } from "react";
import Navbar from "./shared/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password)

    createUser(email, password)
    .then(res => {
      console.log(res.user)
    })
    .catch(error =>{
      console.error(error);
      
    })
  };

  return (
    <div>
        <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h2 className="text-3xl">Register Now</h2>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>Already have an account? Please <Link to='/login' className="text-blue-400 font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
