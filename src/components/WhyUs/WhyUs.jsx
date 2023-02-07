import React from "react";
import Logo from "../../assets/img/logo.png";
import { benefits } from "../../Data";

const WhyUs = () => {
  return (
    <div className="WhyUs Section pt-20">
      <div className="container flex gap-12 xmd:gap-0 md:flex-col md:gap-10">
        <div className="left min-w-[15rem] md:w-auto md:text-center md:mx-auto">
          <h2 className="subHeading">Why Choose</h2>
           <img className="w-16 md:mx-auto" src={Logo} alt="logo" />
           <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui aut ipsum.</p>
        </div>
        <div className="right grid grid-cols-3 gap-4 gap-y-8 lg:grid-cols-2">
            {benefits.map((item,i)=>{
            const {img,text,para} = item
                return <div className="benefit flex flex-col gap-3" key={i}>
                    <img className="smImg border-none" src={img} alt="" />
                      <h3 className="supHeading">{text}</h3>
                      <p className="paragraph">{para}</p>
                </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
