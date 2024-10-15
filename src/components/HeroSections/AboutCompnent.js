import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Background from "../../assets/Vector.png";
const AboutCompnent = ({ Details, width = "" }) => {
  return (
    <div className={width ? width : "max-width"}>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
        <LazyLoad
          className="col-span-2 w-[100%] lg:h-[580px] sm:h-[400px] h-[280px]"
          offset={300}
          threshold={0.95}
        >
          <img
            src={Details.Image}
            alt={Details.Heading1}
            className="w-full h-full object-left object-cover"
          />
        </LazyLoad>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="bg-[#1B1B1B]  p-8">
            <div
              className="border border-[#62513e] p-8 bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url(${Background})`, backgroundSize: "600px" }}

            >
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-medium text-[#8E7861] tracking-widest">
                    {Details.Heading1}
                  </h2>

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

              <div className="mt-8 w-full h-[1px] bg-[#62513e]" />

              {Details.Icon && (
                <div className="flex gap-5 items-center mt-8">
                  <div className="border border-[#62513e] rounded-full w-[65px] py-6 aspect-square flex justify-center items-center ">
                    <div className="w-[60px] relative aspect-[4/2.2] p-2">
                      <img
                        src={Details.Icon}
                        alt="icon"
                        className="w-full h-full object-contain absolute top-0 left-0"
                      />
                    </div>
                  </div>

                  {Details.Heading3 && (
                    <h3 className="text-[1.6rem] font-bold w-[200px]">
                      {Details.Heading3}
                    </h3>
                  )}
                </div>
              )}

              <div className="mt-8">
                <Link
                  to={Details.Button.Src}
                  className="common-btn w-fit flex tracking-widest items-center gap-5"
                >
                  {Details.Button.Name} <MdArrowRightAlt size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompnent;
