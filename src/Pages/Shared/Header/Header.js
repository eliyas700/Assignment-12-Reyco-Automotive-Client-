import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);

  const menuItems = (
    <>
      <li className="text-lg  font-semibold">
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li className="text-lg font-semibold" tabIndex="0">
        <CustomLink to="/blog">Blogs</CustomLink>
      </li>
      <li className="text-lg font-semibold">
        <CustomLink to="/products">Products</CustomLink>
      </li>
      <li className="text-lg font-semibold">
        <CustomLink to="/myPortfolio">My Portfolio</CustomLink>
      </li>
      <li className="text-lg font-semibold">
        <CustomLink to="/contact">Contact Us</CustomLink>
      </li>
      {user && (
        <li className="text-lg font-semibold">
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
      {user ? (
        <li className="text-lg font-semibold">
          <button
            className="text-lg font-semibold"
            onClick={() => signOut(auth)}
          >
            <span title={user?.email}>
              {user?.photoURL ? (
                <div className="avatar online">
                  <div className="w-12 rounded-full">
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
          <CustomLink to="/login">Login</CustomLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="flex justify-between sticky top-0 z-50 px-3 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="navbar-start">
          <CustomLink
            to="/"
            className="btn btn-ghost normal-case text-[18px] font-sans"
          >
            <img
              width={80}
              src="https://i.ibb.co/VC53b2C/Reyco-logo.png"
              alt="Reyco-Automotive"
            />
          </CustomLink>
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
