import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";



const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [update, setUpdate] = useState({
    name: user?.name || "",
    age: user?.age || "",
    skills: user?.skills || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await axios.patch(
        BASE_URL + "/profile/update",
        { ...update },
        {
          withCredentials: true,
        }
      );

      setMessage("Profile updated successfully!");
    } catch (err) {
      console.log("Something went wrong", err);
      setMessage("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (user)
    return (
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-20 mx-auto">
        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={update.name}
          onChange={(e) => setUpdate({ ...update, name: e.target.value })}
        />

        <label className="label">Age</label>
        <input
          type="number"
          className="input"
          placeholder="Age"
          value={update.age}
          onChange={(e) => setUpdate({ ...update, age: e.target.value })}
        />
         <label className="label">Bio</label>
        <input
          type="number"
          className="input"
          placeholder="Age"
          value={update.age}
          onChange={(e) => setUpdate({ ...update, bio: e.target.value })}
        />

        <label className="label">Skills</label>
        <input
          type="text"
          className="input"
          placeholder="Skills"
          value={update.skills}
          onChange={(e) => setUpdate({ ...update, skills: e.target.value })}
        />

        {message && (
          <div
            className={`alert mt-4 ${
              message.includes("success") ? "alert-success" : "alert-error"
            }`}
          >
            {message}
          </div>
        )}

        <button
          className="btn btn-neutral mt-4"
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </fieldset>
    );
};

export default Profile;
