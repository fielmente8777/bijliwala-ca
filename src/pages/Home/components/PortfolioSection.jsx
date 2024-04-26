import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import arrowLeft from "../../../assets/svg/arrowleft.svg";
import arrowRight from "../../../assets/svg/arrowright.svg";

import Portfolio1 from "../../../assets/Images/portfolio1.png";
import Portfolio2 from "../../../assets/Images/portfolio2.png";
import Portfolio3 from "../../../assets/Images/portfolio3.png";

import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

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
    Heading1: "RESTAURANT",
    Heading2: "Karahi Point",
    Image: Portfolio3,
  },
  {
    Heading1: "RESTAURANT",
    Heading2: "Desi bar and grills",
    Image: Portfolio1,
  },
  {
    Heading1: "RESTAURANT",
    Heading2: "Hakka club",
    Image: Portfolio2,
  },
  {
    Heading1: "RESTAURANT",
    Heading2: "Ikbar",
    Image: Portfolio3,
  },

];

const PortfolioSection = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          el: ".bullets",
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
                    <h3 className="text-[2.4rem] font-bold text-center">
                      {Portfolio.Heading2}
                    </h3>
                    <div className="flex justify-center mt-5">
                      <Link
                        to={"/Work"}
                        className="common-btn flex items-center gap-5"
                      >
                        View Details <MdArrowRightAlt size={25} />
                      </Link>
                    </div>
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
        <span className="bullets"></span>

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

export default PortfolioSection;
