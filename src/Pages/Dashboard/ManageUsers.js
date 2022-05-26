import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Header/Loading/Loading";
import ManageUsersRow from "./ManageUsersRow";

const ManageUsers = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("https://morning-wave-16762.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ManageUsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></ManageUsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
