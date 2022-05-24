import React from "react";
import { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order?.userEmail}</td>
                <td>{order?.name}</td>
                <td>{order?.quantity}</td>
                <td>
                  {order.payment === "unpaid" ? (
                    <span className="text-red-500">Unpaid</span>
                  ) : (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
                <td>
                  {order.payment === "unpaid" ? (
                    <button className="btn-xs btn-error">Cancel Order</button>
                  ) : (
                    <button className="btn-xs btn-primary">CShipment</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
