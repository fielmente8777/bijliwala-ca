import React from "react";
import ReactStars from "react-rating-stars-component";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonal = () => {
  return (
    <div>
      <Swiper
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
        className="px-36"
      >
        {new Array(5).fill("").map(() => {
          return (
            <SwiperSlide>
              <div className="bg-[#1B1B1B] px-6 py-4">
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
    </div>
  );
};

export default Testimonal;
