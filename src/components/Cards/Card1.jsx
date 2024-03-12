import React from "react";

export const Card1 = ({ Details, Position }) => {
  return (
    <div className="border border-[#473C30]  flex items-center px-8 md:py-16 py-8">
      <div
        className={`flex flex-col gap-5 ${
          Position ? "items-center" : "items-start"
        }`}
      >
        <div
          className="w-[130px] h-[80px]"
          // style={{
          //   margin: Position ? "0 auto" : "0 0",
          // }}
        >
          <img src={Details.Icon} alt="floor-img" className="w-full h-full" />
        </div>
        <h2 className="md:text-[2.4rem] text-[1.8rem] font-bold">
          {Details.Heading}
        </h2>
        <p
          className={`text-[1.4rem] text-[#FFFFFFB0] ${
            Position ? "text-center" : "text-start"
          }`}
        >
          {Details.Para}
        </p>
      </div>
    </div>
  );
};
