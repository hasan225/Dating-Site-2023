import React from "react";
import LeftImg from "../../assets/img/undraw.svg";

const SuccessReach = () => {
  return (
    <div className="SuccessReach Section bg-primary pb-0">
      <div className="container flexCenter gap-12 py-12 md:flex-col ">
        <div className="left flex-1 justify-center flex">
          <img className=" rounded-full shadow-lg h-[31rem] w-[31rem]" src={LeftImg} alt="right" />
        </div>
        <div className="right flex-1 flex flex-col gap-3 relative">
            <div className="w-10 h-10 absolute -top-3 left-44 rounded-full  linearBg"></div>
          <h2 className="subHeading text-4xl relative">
            <span className="span">World's</span> best <br /> platform for
            <span className="span text-pink-600"> dating</span>
          </h2>
          <p className="paragraph">Liquorice gummi bears gummies pie tart jujubes tart.<br/> Danish tootsie roll</p>
          <div className="reach mt-6 flex gap-10">
            <div>
                <h4 className="linearText subHeading font-black">23K</h4>
                <p className="text-gray-800">Views</p>
            </div>
            <div>
                <h4 className="linearText subHeading font-black">2K+</h4>
                <p className="text-gray-800">Success</p>
            </div>
            <div>
                <h4 className="linearText subHeading font-black">7K</h4>
                <p className="text-gray-800">Considering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessReach;
