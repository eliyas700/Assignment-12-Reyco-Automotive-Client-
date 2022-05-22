import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reason = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-5  mx-3  ">
        <div className="shadow-xl reason-item border-4 py-2 rounded-xl flex flex-col justify-center items-center">
          <img width={80} src="https://i.ibb.co/XW5q7XF/744502.png" alt="" />
          <h2 className="text-5xl text-primary font-bold">53</h2>
          <h3 className="text-xl text-primary font-bold">Countries</h3>
        </div>
        <div className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center">
          <img width={80} src="https://i.ibb.co/51twWyP/921347.png" alt="" />
          <h2 className="text-5xl text-primary font-bold">
            1453<sup>+</sup>
          </h2>
          <h3 className="text-xl text-primary font-bold">Clients</h3>
        </div>
        <div className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center">
          <img width={80} src="https://i.ibb.co/DRV4Zb8/1589592.png" alt="" />
          <h2 className="text-5xl text-primary font-bold">
            140M<sup>+</sup>
          </h2>
          <h3 className="text-xl text-primary font-bold">Annual Revenue</h3>
        </div>
        <div className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center">
          <img width={80} src="https://i.ibb.co/0r1W5zR/settings.png" alt="" />
          <h2 className="text-5xl text-primary font-bold">170 </h2>
          <h3 className="text-xl text-primary font-bold">Items</h3>
        </div>
      </div>
    </div>
  );
};

export default Reason;
