import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-3xl font-semibold text-primary text-center my-3">
          Welcome to Your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 lg:w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-xl font-semibold text-secondary">User Panel</li>
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add Review</Link>
            <Link to="/dashboard/manageUsers">Manage Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
