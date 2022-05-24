import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyProfile.css";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class="card-container bg-gradient-to-t from-orange-500 to-yellow-500">
        <span class="pro">PRO</span>
        <img
          class="round block mx-auto w-48 h-48"
          src={user?.photoURL}
          alt="user"
        />
        <h3 className="text-2xl my-3 font-bold text-primary">
          {user?.displayName}
        </h3>

        <div class="buttons">
          <Link to="/dashboard/profile" class="btn btn-primary mr-3">
            About Me
          </Link>
          <Link to="/dashboard/profile/update" class="btn btn-accent">
            Update Profile
          </Link>
        </div>
        <div class="skills">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
