import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div
      className="py-20"
      style={{
        backgroundImage:
          "url(" + "https://i.ibb.co/K2SMvBm/SL-031721-41490-35.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-center text-2xl font-bold py-5">
        Give Your Feedback
      </h2>
      <div class="card w-96 glass mx-auto">
        <form className=" border-2 p-4">
          <label htmlFor="review"></label>
          <textarea
            name=""
            id="review"
            cols="45"
            placeholder="Type Your Message"
            rows="5"
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary my-2"
            value="Post Now"
          />
        </form>
      </div>
    </div>
  );
};

export default MyReview;
