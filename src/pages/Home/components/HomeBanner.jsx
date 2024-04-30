import React from "react";


import { MdArrowRightAlt } from "react-icons/md";

import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/lazy'
const HomeBanner = () => {


  return (
    <>
      <div className="max-width lg:flex justify-end relative pb-10">
        <div className="max-w-[1030px]">

          <div className="md:h-[630px] h-[280px] lg:w-[1030px] ">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url='https://www.youtube.com/embed/QDPXrp9dCQI'
              playing={true}
              loop={true}
              controls={true}
              muted={true}
              Autoplay={true}
              AllowCommunication={true}
            />
          </div>
        </div>

        <div className="lg:absolute top-32 left-0 lg:w-[315px] w-[90%] mx-auto lg:h-[458px]  bg-[#1B1B1B] p-2 z-[100]">
          <div className="border border-[#62513e] h-full flex lg:justify-center items-center py-8">
            <div className="lg:w-[271px] flex flex-col gap-4 lg:px-0 px-8">
              <h2 className="md:text-[1.5rem] text-[1.3rem] font-medium">
                WE ARE
              </h2>
              <h2 className="md:text-[3.2rem] text-[2.4rem] md:leading-[4rem] leading-[3rem] font-bold">
                Building dream projects in a{" "}
                <span className="text-[#8e7861]">budget.</span>
              </h2>
              <p className="text-[1.5rem] font-normal leading-[2.4rem] text-justify">
                As a trusted leader in renovations and electrical solutions, we
                bring your interior dreams to life. From restaurant upgrades to
                cafe transformations, we're your partners in crafting spaces
                that tell your unique story.
              </p>

              <div>
                <Link
                  to={"/Contact"}
                  className="common-btn w-fit flex gap-4 items-center"
                >
                  Contact us <MdArrowRightAlt size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default HomeBanner;
