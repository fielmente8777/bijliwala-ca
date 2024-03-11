import React from "react";
import bannerImg from "../../../assets/Images/HomeBannerImage.png";

export const HomeBanner = () => {
  return (
    <div className="max-width flex justify-end relative">
      <div className="max-w-[1030px] mt-8">
        <div className="h-[630px]">
          <img src={bannerImg} alt="banner-photo" className="w-full h-full" />
        </div>
      </div>

      <div className="absolute top-32 left-0 w-[315px] h-[458px] bg-[#1B1B1B] p-2">
        <div className="border border-[#62513e] h-full flex justify-center items-center">
          <div className="w-[271px] flex flex-col gap-2">
            <h2 className="text-[1.5rem] font-medium">WE ARE</h2>
            <h2 className="text-[3.2rem] leading-[4rem] font-bold">
              Building dream projects in a{" "}
              <span className="text-[#8e7861]">budget.</span>
            </h2>
            <p className="text-[1.5rem] font-normal leading-[2.4rem]">
              As a trusted leader in renovations and electrical solutions, we
              bring your interior dreams to life. From restaurant upgrades to
              cafe transformations, we're your partners in crafting spaces that
              tell your unique story.
            </p>

            <div>
              <button className="common-btn">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
