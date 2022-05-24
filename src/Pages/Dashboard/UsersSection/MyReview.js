import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div
      className="pt-10 pb-16"
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
      <div class="card w-96 glass mx-auto shadow-xl">
        <form className=" border-2 p-4">
          <div>
            <label htmlFor="country">Country</label>
            <input
              className="block my-2 border-2"
              id="country"
              type="text"
              placeholder="Type Your Country Name"
            />
          </div>
          <label className="my-2 block" htmlFor="review">
            Comment
          </label>
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
