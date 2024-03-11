import React from "react";
import Brand1 from "../../../assets/Images/brand1.png";
import Brand2 from "../../../assets/Images/brand2.png";
import Brand3 from "../../../assets/Images/brand3.png";
import Brand4 from "../../../assets/Images/brand4.png";
import Brand5 from "../../../assets/Images/brand5.png";
import Brand6 from "../../../assets/Images/brand6.png";

const Brand = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const BrandSection = () => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 px-4">
      {Brand.map((Image) => {
        return (
          <div className="border border-[#473C30] flex items-center justify-center min-h-[230px]">
            <div className="w-[156px]">
              <img src={Image} alt="" className="w-full h-auto" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandSection;
