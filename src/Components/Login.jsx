import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

  const { signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password)

    signIn(email, password)
    .then(res => {
      console.log(location)
      navigate(location?.state ? location.state : '/')
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
            <h2 className="text-3xl">Login Here</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleLogin}>
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>don't have an account? Please <Link to='/register' className="text-blue-400 font-semibold">Register</Link></p>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default Login;