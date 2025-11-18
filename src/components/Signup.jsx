import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    skills: "",
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    // Add signup logic here
    const res = await axios.post("http://localhost:3000/signup", userDetails);
    console.log("api response", res);
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Connect with your fellow developers and explore exciting
            opportunities in the tech world.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />

              {/* Age */}
              <label className="label">Age</label>
              <input
                type="number"
                className="input"
                placeholder="Age"
                value={userDetails.age}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, age: e.target.value })
                }
              />

              {/* Gender */}
              <label className="label">Gender</label>
              <select
                className="select select-bordered"
                value={userDetails.gender}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {/* Skills */}
              <label className="label">Skills</label>
              <input
                type="text"
                className="input"
                placeholder="e.g. React, Node, Python"
                value={userDetails.skills}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, skills: e.target.value })
                }
              />

              {/* Button */}
              <button className="btn btn-neutral mt-4" onClick={handleSignup}>Signup</button>

              <span className="text-center mt-2">
                Already have an account?{" "}
                <Link to="/login" className="hover:underline cursor-pointer">
                  Login
                </Link>
              </span>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
