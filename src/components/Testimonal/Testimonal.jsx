import React from "react";
import ReactStars from "react-rating-stars-component";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import arrowLeft from "../../assets/svg/arrowleft.svg";
import arrowRight from "../../assets/svg/arrowright.svg";

import "swiper/css";
import "swiper/css/pagination";

const Testimonal = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          el: "#bullets-Portfolio",
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {new Array(5).fill("").map(() => {
          return (
            <SwiperSlide>
              <div className="bg-[#1B1B1B] px-6 py-10">
                <div>
                  <div className="flex justify-center">
                    <ReactStars
                      count={5}
                      size={24}
                      color={"#8E7861"}
                      edit={false}
                    />
                  </div>
                  <p className="para sm:text-center text-justify">
                    "The Brief team has been sincerely committed to designing
                    great communication around our projects. Our customers love
                    their creative work - and so do we!"
                  </p>
                  <hr className="mt-5" />
                  <div className="mt-2 flex flex-col items-center">
                    <h2 className="md:text-[2.4rem] text-[1.8rem] uppercase text-[#8E7861] font-bold">
                      Helen Ginsberg,
                    </h2>
                    <h3 className="md:text-[1.6rem] text-[1.4rem] text-[#FFFFFF]">
                      CEO of Treasure Island
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* swiper button and pagination customization***** */}
      <div className="md:mt-16 mt-5 flex items-center gap-5 justify-center">
        {/* left arrow*** */}
        <div className="md:w-[35px] w-[22px] cursor-pointer prev-btn">
          <img
            src={arrowLeft}
            alt="arrow-left-vecotr"
            className="w-full h-full"
          />
        </div>
        {/* indicators***** */}
        <span id="bullets-Portfolio"></span>

        {/* right arrows***** */}
        <div className="md:w-[35px] w-[22px] cursor-pointer next-btn">
          <img
            src={arrowRight}
            alt="arrow-right-vecotr"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
