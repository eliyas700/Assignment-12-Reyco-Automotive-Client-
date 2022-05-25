import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleShipment = (_id) => {
    console.log(_id);
    const payment = {
      status: "Shipped",
    };
    fetch(`https://morning-wave-16762.herokuapp.com/ship/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // fetch(`https://morning-wave-16762.herokuapp.com/orders/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(payment),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.result.acknowledged) {
    //       toast.success("Product Successfully!");
    //     }
    //     console.log(data, "dfgdgfd");
    //   });
  };

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
                    <span className="text-green-500">
                      {order.status && order.payment
                        ? "Shipped Successfully"
                        : "Pending For Shipping"}
                    </span>
                  )}
                </td>
                <td>
                  {order.payment === "unpaid" && (
                    <label
                      onClick={() => setDeleteOrder(order)}
                      for="delete-doctor-modal"
                      className="btn  btn-xs btn-error modal-button"
                    >
                      Cancel Order
                    </label>
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
