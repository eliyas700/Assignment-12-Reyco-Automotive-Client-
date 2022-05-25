import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import useUserOrders from "../../Hooks/useUserOrders";

const AboutMe = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useUserOrders([]);
  const [admin, setAdmin] = useAdmin(user);
  const email = user?.email;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://morning-wave-16762.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const exactUser = users.find((user) => user.email === email);

  return (
    <div>
      <h3>
        Name : <span className="font-semibold"> {user?.displayName}</span>
      </h3>
      <h3>
        Email : <span className="font-semibold">{user?.email}</span>
      </h3>
      {!admin && (
        <h3>
          Total Order Placed:
          <span className="font-semibold">{orders?.length}</span>
        </h3>
      )}
      <ul className="grid grid-cols-3 gap-3">
        <li>Status: {exactUser?.role}</li>
        <li>Location: {exactUser?.location || "Not Found"}</li>
        <li>Birthday: {exactUser?.date || "Not Found"}</li>
        <li>School: {exactUser?.school || "Not Found"}</li>
        <li>Phone: {exactUser?.phone || "Not Found"}</li>
        <li>GitHub: {exactUser?.Github || "Not Found"}</li>
        <li>LinkedIn: {exactUser?.linkedin || "Not Found"}</li>
        {/* 
        <li>Birth Date : {date ? date : "Not Found"}</li>
        <li>School: {school ? school : "Not Found"}</li>
        <li>Contact: {phone ? phone : "Not Found"}</li>
        <li>Git Hub :{Github ? Github : "Not Found"}</li> */}
      </ul>
    </div>
  );
};

export default AboutMe;
