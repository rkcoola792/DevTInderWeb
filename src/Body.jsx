import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import { BASE_URL } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/userSlice";
import axios from "axios";

const Body = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      console.log("Something went wrong", err);
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    if (!user) fetchUser();
  }, [user]);
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Body;
