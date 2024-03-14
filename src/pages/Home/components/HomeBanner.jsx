import React from "react";
import bannerImg from "../../../assets/Images/HomeBannerImage.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import arrowLeft from "../../../assets/svg/arrowleft.svg";
import arrowRight from "../../../assets/svg/arrowright.svg";

import { MdArrowRightAlt } from "react-icons/md";

export const HomeBanner = () => {
  return (
    <>
      <div className="max-width lg:flex justify-end relative pb-10">
        <div className="max-w-[1030px]">
          <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              el: "#bullets-home-banner",
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {new Array(3).fill("").map(() => {
              return (
                <SwiperSlide>
                  <div className="md:h-[630px] h-[280px]">
                    <img
                      src={bannerImg}
                      alt="banner-photo"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="absolute top-32 left-0 w-[315px] h-[458px] bg-[#1B1B1B] p-2 z-[10] lg:block hidden">
          <div className="border border-[#62513e] h-full flex justify-center items-center">
            <div className="w-[271px] flex flex-col gap-4">
              <h2 className="text-[1.5rem] font-medium">WE ARE</h2>
              <h2 className="text-[3.2rem] leading-[4rem] font-bold">
                Building dream projects in a{" "}
                <span className="text-[#8e7861]">budget.</span>
              </h2>
              <p className="text-[1.5rem] font-normal leading-[2.4rem]">
                As a trusted leader in renovations and electrical solutions, we
                bring your interior dreams to life. From restaurant upgrades to
                cafe transformations, we're your partners in crafting spaces
                that tell your unique story.
              </p>

              <div>
                <button className="common-btn flex gap-4 items-center">
                  Contact us <MdArrowRightAlt size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* swiper button and pagination customization***** */}
      <div className="md:mt-5 mt-5 flex items-center gap-5 justify-center">
        {/* left arrow*** */}
        <div className="md:w-[35px] w-[22px] cursor-pointer prev-btn">
          <img
            src={arrowLeft}
            alt="arrow-left-vecotr"
            className="w-full h-full"
          />
        </div>
        {/* indicators***** */}
        <span id="bullets-home-banner"></span>

        {/* right arrows***** */}
        <div className="md:w-[35px] w-[22px] cursor-pointer next-btn">
          <img
            src={arrowRight}
            alt="arrow-right-vecotr"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};
