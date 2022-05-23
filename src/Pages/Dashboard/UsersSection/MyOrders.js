import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            //Home
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <div>
        <h4 className="text-xl my-2 font-semibold">
          Total Orders:{orders?.length}
        </h4>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>

                <th>
                  Price/<small>Piece</small>
                </th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((a, index) => (
                <tr key={a._id}>
                  <th>{index + 1}</th>
                  <th>
                    <div class="avatar">
                      <div class="w-8 rounded">
                        <img src={a.img} alt={a.name} />
                      </div>
                    </div>
                  </th>
                  <td>{a.name}</td>
                  <td>${a.price}</td>
                  <td>{a.quantity}</td>
                  <td>${a.quantity * a.price}</td>
                  <td>
                    {a.payment === "unpaid" && (
                      <div className="flex justify-between">
                        <Link
                          to={`/dashboard/payment/${a._id}`}
                          className="btn btn-xs btn-success"
                        >
                          Pay Now
                        </Link>
                        <button className="btn btn-xs btn-error">Cancel</button>
                      </div>
                    )}
                    {/* {a.price && a.paid && (
                      <div>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          <small>
                            Trans id:
                            <span className="text-success">
                              {a.transactionId}
                            </span>
                          </small>
                        </p>
                      </div>
                    )} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
