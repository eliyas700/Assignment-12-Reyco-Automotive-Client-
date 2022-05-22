import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Header/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate("/");
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }
  return (
    <div>
      <div>
        <div className="divider w-[90%] mx-auto my-0">OR</div>
        <div className="grid  h-20 card rounded-box mt-0 place-items-center">
          <p className="text-red-500">{errorMessage}</p>
          <button
            onClick={async () => {
              await signInWithGoogle();
            }}
            className="btn btn-primary font-normal hover:text-slate-100 text-accent uppercase bg-transparent w-full ]"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
