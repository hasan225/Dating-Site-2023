import React from "react";
// Import Swiper React components
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { feedbacks } from "../../Data";

const Feedback = () => {
  return (
    <section className="Feedback Section">
     <div className="container relative">
     <div className="top bg-primary w-fit pt-10 px-40 pb-72 mx-auto rounded-bl-[12rem] rounded-br-[12rem] rounded-tl-2xl rounded-tr-2xl md:px-10">
        <div className="info text-center">
          <h6 className="font-semibold">Clint Reviews</h6>
          <h2 className="subHeading">
            Some of <span className="font-black">our best</span> customers
          </h2>
        </div>
      </div>
      <div className="bottom w-10/12 mx-auto absolute top-40 left-[8%]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // till the screen gets less then 400
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // this is work when the screen hits 768 to 400   
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // this will work after 1023 to 768
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode,Pagination]}
          className="mySwiper"
        >
          {feedbacks.map((item, i) => {
            console.log(item);
            const { img, name, para, rating } = item;
            return (
              <SwiperSlide className="bg-white shadow-md px-4 py-8 rounded-2xl border" key={i}>
               <div className="flex flex-col gap-4">
               <div className="flex gap-4">
                  <img className="smImg" src={img} alt="" />
                  <h6 className="flexCenter text-2xl gap-1">
                    <AiFillStar className="text-yellow-400 "/>
                    {rating}
                  </h6>
                </div>
                <div>
                    <h5 className="font-medium">{name}</h5>
                    <p className="paragraph">{para}</p>
                </div>
               </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
     </div>
    </section>
  );
};

export default Feedback;
