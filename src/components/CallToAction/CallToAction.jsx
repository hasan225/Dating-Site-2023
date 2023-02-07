import React from "react";

const CallToAction = () => {
  return (
    <section className="CallToAction Section md:px-0">
      <div className="containers flexDiverge px-10 gap-6 bg-teal-600 w-9/12 mx-auto py-12 rounded-2xl text-white lg:w-10/12 xmd:flex-col xmd:text-center md:w-full">
        <div className="left">
          <h2 className="subHeading">
            What are you waiting  for let's get started
          </h2>
        </div>
        <div className="right flexCenter gap-4">
          <button className="btn bg-white text-teal-600 w-32 h-11 hover:text-white">Get Started</button>
          <button className="btn w-32 h-11 text-white">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
