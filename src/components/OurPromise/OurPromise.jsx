import React from 'react'
import RightImg from "../../assets/img/hero.svg";

const OurPromise = () => {
  return (
    <div className='OurPromise Section mt-20'>
        <div className="container flexCenter gap-28 py-12 lg:gap-12 md:py-0 md:flex-col-reverse">
        <div className=" left flex flex-col gap-3 relative justify-end">
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
        <div className="right justify-center flex relative">
          <img className="border-2 border-blue-100 rounded-tl-[12rem] rounded-tr-[12rem] rounded-bl-2xl rounded-br-2xl shadow-lg h-[31rem] w-[28rem]" src={RightImg} alt="right" />
          <img className="absolute bottom-10 bg-white -left-16 border-2 border-blue-100 rounded-tl-[12rem] rounded-tr-[12rem] rounded-bl-2xl rounded-br-2xl shadow-lg h-36 w-32 sm:-bottom-10 sm:right-4 sm:left-auto" src={RightImg} alt="right" />
        </div>
      </div>
    </div>
  )
}

export default OurPromise