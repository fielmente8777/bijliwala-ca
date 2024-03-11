import React from "react";
import videoPreviewImage from "../../../assets/Images/videioprevImage.png";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const VideoSection = () => {
  return (
    <div
      className="flex justify-center items-center lg:min-h-[574px] md:h-[400px] h-[280px]"
      style={{
        backgroundImage: `url(${videoPreviewImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <MdOutlinePlayCircleOutline className="text-[8rem] text-[#8E7861] cursor-pointer" />
      </div>
    </div>
  );
};

export default VideoSection;
