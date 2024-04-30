import React from "react";
import LazyLoad from "react-lazy-load";

const Card2 = ({ Details }) => {
  return (
    <div className="min-h-[362px] bg-[#1B1B1B] px-4 py-4">
      <LazyLoad className="h-[266px]" offset={300} threshold={0.95} >
        <img src={Details.Image} alt="details" className="w-full h-full rounded-md" />
      </LazyLoad>
      <div className="mt-6">
        <h2 className="text-[2.4rem] font-bold text-center text-[#8E7861] capitalize">
          {Details.Heading}
        </h2>
        <p className="text-[1.5rem] text-center font-normal capitalize">
          {Details.Para}
        </p>
      </div>
    </div>
  );
};

export default Card2;
