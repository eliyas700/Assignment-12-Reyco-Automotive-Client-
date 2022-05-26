import React from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className="grid grid-cols-1 my-3 lg:grid-cols-3 gap-5">
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="card w-96 bg-base-100 shadow-lg mx-auto image-full"
      >
        <figure>
          <img src="https://i.ibb.co/VQYQVY3/Screenshot-388.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Gadget World</h2>
          <p>
            This site is mainly about Gadget Items Selling Shop . User can see
            some gadget items .User Can Buy a gadget After Log in .User Can See
            his Ordered List he can manage it also
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://gadget-world-624e5.web.app/"
              className="btn btn-primary"
            >
              Explore Site
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="card w-96 bg-base-100 shadow-xl mx-auto  image-full"
      >
        <figure>
          <img src="https://i.ibb.co/LCtbwdB/Screenshot-389.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Reyco Automotive</h2>
          <p>
            This site is mainly related car Auto Parts Warehouse.User Can Buy
            Throughout Credit card. On my profile Section you Can Update Your
            Personal Infos. Most Exciting Part is Admin have different
            Authorization.
          </p>
          <div className="card-actions justify-end">
            <a href="/" className="btn btn-primary">
              Explore Site
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="card w-96 bg-base-100 shadow-xl mx-auto  image-full"
      >
        <figure>
          <img src="https://i.ibb.co/xFZ5zMc/Screenshot-387.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tourisman</h2>
          <p>
            This site is mainly related single person Tourist Guide related
            service . You can choose a Package from Different Packages the Is
            available.{" "}
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://tourisman-fd3d5.web.app/"
              className="btn btn-primary"
            >
              Explore Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
