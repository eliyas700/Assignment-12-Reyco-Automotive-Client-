import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const menuItems = (
    <>
      <li className="text-lg  font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg font-semibold" tabIndex="0">
        <Link to="/about">Blogs</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/products">Products</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/appointment">My Portfolio</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/contact">Contact Us</Link>
      </li>

      {user ? (
        <li className="text-lg font-semibold">
          <button
            className="text-lg font-semibold"
            onClick={() => signOut(auth)}
          >
            <span title={user?.email}>
              {user?.photoURL ? (
                <div class="avatar online">
                  <div class="w-12 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </div>
              ) : (
                <span>{user?.displayName}</span>
              )}
            </span>
            Sign Out
          </button>
        </li>
      ) : (
        <li className="text-lg font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="flex justify-between sticky top-0 z-50 px-3 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-[18px] font-sans"
          >
            <img
              width={80}
              src="https://i.ibb.co/VC53b2C/Reyco-logo.png"
              alt="Reyco-Automotive"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-accent lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            style={{ right: "0" }}
            tabIndex="0"
            className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
