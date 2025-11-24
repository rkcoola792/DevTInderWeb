import React, { useEffect } from "react";
import Feedcard from "./Feedcard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../store/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return <Feedcard name="John Doe" age="20" />;
};

export default Feed;
