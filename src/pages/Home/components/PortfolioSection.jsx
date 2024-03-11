import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Portfolio1 from "../../../assets/Images/portfolio1.png";
import Portfolio2 from "../../../assets/Images/portfolio2.png";
import Portfolio3 from "../../../assets/Images/portfolio3.png";

const Portfolio = [
  {
    Heading1: "RETAIL OUTLET",
    Heading2: "Indian Frootland",
    Image: Portfolio1,
  },
  {
    Heading1: "CLUB",
    Heading2: "Club Kolkata",
    Image: Portfolio2,
  },
  {
    Heading1: "CLUB",
    Heading2: "Club Kolkata",
    Image: Portfolio3,
  },
];

const PortfolioSection = () => {
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
        {Portfolio.map((Portfolio) => {
          return (
            <SwiperSlide>
              <div
                className="flex items-center justify-center sm:h-[500px] h-[350px] px-5 py-6"
                style={{
                  backgroundImage: `url(${Portfolio.Image})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="w-[450px] sm:h-[450px] h-[320px] flex items-center justify-center bg-[#0000006c]">
                  <div>
                    <h2 className="text-[1.6rem] font-medium text-center uppercase">
                      {Portfolio.Heading1}
                    </h2>
                    <h3 className="text-[2.4rem] font-bold">
                      {Portfolio.Heading2}
                    </h3>
                    <div className="flex justify-center mt-5">
                      <button className="common-btn">View Details</button>
                    </div>
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

export default PortfolioSection;
