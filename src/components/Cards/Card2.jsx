import React from "react";
import Img from "../../assets/Images/TeamImg1.png";

const Card2 = ({ Details }) => {
  return (
    <div className="min-h-[362px] bg-[#1B1B1B] px-4 py-4">
      <div className="h-[266px]">
        <img src={Details.Image} alt="" className="w-full h-full rounded-md" />
      </div>
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
