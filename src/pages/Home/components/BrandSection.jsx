import React from "react";
import Brand1 from "../../../assets/Images/brand1.webp";
import Brand2 from "../../../assets/Images/brand2.webp";
import Brand3 from "../../../assets/Images/brand3.webp";
import Brand4 from "../../../assets/Images/brand4.webp";
import Brand5 from "../../../assets/Images/brand5.webp";
import Brand6 from "../../../assets/Images/brand6.webp";
import LazyLoad from "react-lazy-load";


// okkk mil gya


const Brand = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const BrandSection = () => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 px-4">
      {Brand.map((Image, index) => {
        return (
          <div key={index} className="border border-[#473C30] flex items-center justify-center min-h-[150px] p-2">
            <LazyLoad className="w-[156px]" offset={300} threshold={0.95} >
              <img src={Image} alt="" className="w-full h-auto" />
            </LazyLoad>
          </div>
        );
      })}
    </div>
  );
};

export default BrandSection;
