import React from "react";

const HomepageBanner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ygpw7FW/1000-F-105181555-Rev-Mg32i06-QIGm-Fbs9o-So-JEv6-Qx0-Vw-Tm-removebg-preview.png)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-6xl font-bold">Genuine Parts</h1>
          <p class="mb-5 text-lg font-semibold">
            Get The best Car Parts at best price . Authentic Services
            ,Experienced Employees, World Wide Delivery.
          </p>
          <button class="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
