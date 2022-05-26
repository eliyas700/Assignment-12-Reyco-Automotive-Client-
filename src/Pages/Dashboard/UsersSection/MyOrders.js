import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import useUserOrders from "../../../Hooks/useUserOrders";
import UserDeleteOrderModal from "./UserDeleteOrderModal";

const MyOrders = () => {
  const [orders, setOrders] = useUserOrders([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useAdmin(user);

  return (
    <>
      {!admin && (
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
                        <div className="avatar">
                          <div className="w-8 rounded">
                            <img src={a.img} alt={a.name} />
                          </div>
                        </div>
                      </th>
                      <td>{a.name}</td>
                      <td>${a.price}</td>
                      <td>{a.quantity}</td>
                      <td>${a.quantity * a.price}</td>
                      <td>
                        {a?.payment == "unpaid" && (
                          <div className="flex justify-between">
                            <Link
                              to={`/dashboard/payment/${a._id}`}
                              className="btn btn-xs btn-success"
                            >
                              Pay Now
                            </Link>
                            <label
                              onClick={() => setDeleteOrder(a)}
                              htmlFor="user-delete-order"
                              className="btn  btn-xs btn-error modal-button"
                            >
                              Cancel Order
                            </label>
                          </div>
                        )}
                        {a.payment === "paid" && !a.status && (
                          <div>
                            <p>
                              <span className="text-success">
                                Paid{" "}
                                <small className="text-primary">
                                  (Waiting For Shipment)
                                </small>
                              </span>
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
                        )}
                        {a.payment === "paid" && a.status && (
                          <span className="text-green-500">
                            Product Shipped Successfully
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {deleteOrder && (
            <UserDeleteOrderModal
              deleteOrder={deleteOrder}
              setDeleteOrder={setDeleteOrder}
            ></UserDeleteOrderModal>
          )}
        </div>
      )}
    </>
  );
};

export default MyOrders;
