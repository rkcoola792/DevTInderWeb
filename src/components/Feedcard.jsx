import React from "react";
import { useSelector } from "react-redux";

const Feedcard = ({ feed }) => {
  const { name, age, profileImage, bio, skills } = feed;

  return (
    <div className="card bg-base-300 w-96 shadow-sm my-20 mx-auto h-1/2 cursor-pointer">
      <figure>
        <img
          src={
            profileImage ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="Shoes"
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <h3 className="text-lg">{bio}</h3>
        <p className="text-lg">{age}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;
