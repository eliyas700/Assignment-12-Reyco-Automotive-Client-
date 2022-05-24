import React from "react";
import { useEffect, useState } from "react";
import DeleteOrderModal from "./DeleteOrderModal";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  useEffect(() => {
    fetch("https://morning-wave-16762.herokuapp.com/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

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
                    <label
                      onClick={() => setDeleteOrder(order)}
                      for="delete-doctor-modal"
                      className="btn  btn-xs btn-error modal-button"
                    >
                      Cancel Order
                    </label>
                  ) : (
                    <button className="btn-xs btn-primary">CShipment</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteOrderModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        ></DeleteOrderModal>
      )}
    </div>
  );
};

export default ManageOrders;
