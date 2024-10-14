import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const HeroSection = ({ Details }) => {
  return (
    <div className="max-width">
      <div className="flex lg:flex-row flex-col gap-8 items-center">
        <LazyLoad className="lg:w-[70%] w-[100%] lg:h-[580px] sm:h-[400px] h-[280px]" offset={300} threshold={0.95} >
          <img src={Details.Image} alt={Details.Heading1} className="w-full h-full" />
        </LazyLoad>
        <div className="lg:w-[30%] w-[100%]">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="heading-h2">{Details.Heading1}</h2>

              <h3 className="heading-h3">
                {Details.Heading2}
                <span className="text-[#8e7861]">{Details.Span}</span>
              </h3>
            </div>

            <p className="para">{Details.Para}</p>

            {Details.Para2 && (
              <p className="text-[1.5rem] font-normal leading-[2.4rem]">
                Start your transformation today.
              </p>
            )}
          </div>

          <hr className="mt-8" />

          {Details.Icon && (
            <div className="flex gap-5 items-center mt-8 w-[262px]">
              {Details.Icon && (
                <div className="w-[60px] h-[50px]">
                  <img
                    src={Details.Icon}
                    alt="icon"
                    className="w-full h-full"
                  />
                </div>
              )}
              {Details.Heading3 && (
                <h3 className="text-[1.6rem] font-bold">{Details.Heading3}</h3>
              )}
            </div>
          )}

          <div className="mt-8">
            <Link
              to={Details.Button.Src}
              className="common-btn w-fit flex items-center gap-5"
            >
              {Details.Button.Name} <MdArrowRightAlt size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
