import React from "react";

const Offer = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-secondary text-center font-serif my-3">
        Eid Bundle Offer :Apply Code : 12webeliyas
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <img src="https://i.ibb.co/bB2Pm5v/Untitled-1-copy-1.jpg" alt="" />
        <img src="https://i.ibb.co/fQ0CHq2/Eid-Bundle-offer.jpg" alt="" />
      </div>
      <div className="my-5 text-center block mx-auto">
        <h2 className="text-4xl font-bold ">Attention:Deal Zone</h2>
        <p className="text-lg font-semibold text-accent">
          Hurry Up ! Get Discount Up to 50%
        </p>
        <div className="block mx-auto">
          <div className="grid grid-flow-col gap-5    auto-cols-max lg:ml-96 text-center">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span

                // style={`--value:15`}
                //   style="--value:15;"
                ></span>
              </span>
              days
            </div>
            <div className="flex flex-col  p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                //   style="--value:10;"
                ></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                //   style="--value:24;"
                ></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                //    style="--value:48;"
                ></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
