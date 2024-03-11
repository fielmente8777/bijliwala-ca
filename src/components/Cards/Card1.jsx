import React from "react";

export const Card1 = ({ Details }) => {
  return (
    <div className="border border-[#473C30] min-h-[360px] flex items-center px-8">
      <div className="flex flex-col gap-5">
        <div className="w-[130px] h-[80px]">
          <img src={Details.Icon} alt="floor-img" className="w-full h-full" />
        </div>
        <h2 className="text-[2.4rem] font-bold">{Details.Heading}</h2>
        <p className="text-[1.4rem] text-[#FFFFFFB0]">{Details.Para}</p>
      </div>
    </div>
  );
};
