import React from "react";
import HeroRight from "../../assets/img/hero.svg"
import P1 from "../../assets/img/anonymous.png"
import P2 from "../../assets/img/awareness.png"
import P3 from "../../assets/img/bitcoin.png"
import P4 from "../../assets/img/branding.png"

const Hero = () => {
  return (
    <section className="Hero Section pb-0 mx-8 min-h-[75vh] flexCenter bg-primary md:mx-0">
         <div className="blurs -top-[18%] right-0"></div>
      <div className="blurs  top-[36%] -left-32"></div>
      <div className="container flexDiverge md:flex-col-reverse md:gap-12">
        <div className="left flex flex-col gap-6">
          <h1 className="heading font-bold">
            <span className="span">World's</span> Largest Dating & <br /> Couple Website !
          </h1>
          <p className="supHeading">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button className="btn btnSecondary w-32">Get Started</button>

          <div className="newProfiles mt-14 md:mt-0 md:pb-10">
            <h3 className="font-bold mb-2">New Profiles</h3>
            <div className="profiles flexStart">
              <img className="smImg" src={P1} alt="" />
              <img className="smImg" src={P2} alt="" />
              <img className="smImg" src={P3} alt="" />
              <img className="smImg" src={P4} alt="" />
              <img className="smImg" src={P1} alt="" />
              <img className="smImg" src={P2} alt="" />
            </div>
          </div>
        </div>
        <div className="right md:py-9">
          <img className="w-96" src={HeroRight} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
