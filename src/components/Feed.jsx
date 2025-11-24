import React, { useEffect } from "react";
import Feedcard from "./Feedcard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed?page=1&limit=10", {
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
  if (feed) return feed.feed.map((feed) => <Feedcard feed={feed} />);
};

export default Feed;
