import React from "react";
import { toast } from "react-toastify";

const DeleteProductModal = ({ deleteProduct, setDeleteProduct }) => {
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://morning-wave-16762.herokuapp.com/products/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`  ${deleteProduct.name} is Removed Successfully`);
          setDeleteProduct(null);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-manage-product"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you Sure you want to remove {deleteProduct.name} ?
          </h3>
          <p className="py-4">
            Please note That Removing Product won't be back!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(deleteProduct._id)}
              className="btn btn-xs btn-error"
            >
              Confirm
            </button>
            <label for="delete-manage-product" className="btn btn-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
