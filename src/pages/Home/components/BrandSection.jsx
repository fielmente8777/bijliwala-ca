import React from "react";
import Brand1 from "../../../assets/Images/brand1.webp";
import Brand2 from "../../../assets/Images/brand2.webp";
import Brand3 from "../../../assets/Images/brand3.webp";
import Brand4 from "../../../assets/Images/brand4.webp";
import Brand5 from "../../../assets/Images/brand5.webp";
import Brand6 from "../../../assets/Images/brand6.webp";
import Brand7 from "../../../assets/Images/ullo.jpg"
import Brand8 from "../../../assets/Images/befikre.jpg"
import Brand9 from "../../../assets/Images/ikbar.png"
import LazyLoad from "react-lazy-load";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
// okkk mil gya


const Brand = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9];

const BrandSection = () => {
  return (
    <div className=" px-4">
      {/* {Brand.map((Image, index) => {
        return (
          <div key={index} className="border border-[#473C30] flex items-center justify-center min-h-[150px] p-2">
            <LazyLoad className="w-[156px]" offset={300} threshold={0.95} >
              <img src={Image} alt="" className="w-full h-auto" />
            </LazyLoad>
          </div>
        );
      })} */}


      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          el: "#bullets-Portfolio",
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        slidesPerView={2}
        modules={[Pagination, Autoplay, Navigation]}
        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {/* <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 px-4  border-2"> */}
        {Brand.map((Image, index) => {
          return (
            <SwiperSlide>
              <div key={index} className="border border-[#473C30] flex items-center justify-center h-[150px] p-2">
                <LazyLoad className="w-[156px]" offset={300} threshold={0.95} >
                  <img src={Image} alt="" className="" />
                </LazyLoad>
              </div>
            </SwiperSlide>
          );
        })}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default BrandSection;
