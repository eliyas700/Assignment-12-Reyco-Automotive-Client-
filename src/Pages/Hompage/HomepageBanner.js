import React from "react";

const HomepageBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ygpw7FW/1000-F-105181555-Rev-Mg32i06-QIGm-Fbs9o-So-JEv6-Qx0-Vw-Tm-removebg-preview.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-5 text-6xl font-bold"
          >
            Genuine Parts
          </h1>
          <p className="mb-5 text-lg font-semibold">
            Get The best Car Parts at best price . Authentic Services
            ,Experienced Employees, World Wide Delivery.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="btn btn-primary"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
