import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../store/userSlice";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("user from store", user);
  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true } // to set cookies into the browser
      );
      console.log("api response", res.data);
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Connect with you fellow developers and explore exciting
            opportunities in the tech world.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className="link link-hover text-center">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" onClick={handleLogin}>
                Login
              </button>
              <span className="text-center">
                Doesn't have an account ?{" "}
                <Link to="/signup" className="hover:underline cursor-pointer">
                  Sign Up
                </Link>
              </span>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
