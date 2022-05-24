import React from "react";
import { toast } from "react-toastify";

const ManageUsersRow = ({ user, index }) => {
  const { email } = user;
  const makeAdmin = () => {
    fetch(`https://morning-wave-16762.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Sorry! Failed to Promote as an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Promoted as As An Admin ");
          //   refetch();
        }
      });
  };
  console.log(user);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {user?.role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-red-500">Remove User</button>
      </td>
    </tr>
  );
};

export default ManageUsersRow;
