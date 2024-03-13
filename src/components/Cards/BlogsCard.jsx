import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const BlogsCard = () => {
  return (
    <div className="bg-[#1B1B1B] px-10 py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-[#8E7861] text-[1.6rem] font-medium">
            DECEMBER 21, 2023
          </h3>
          <h4 className="heading-h3">Lorem Ipsum Demo</h4>
        </div>
        <p className="para text-justify">
          {" "}
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The not passage is
          attributed to an unknown typesetter in the 15th century who is thought
          to have scrambled parts of Cicero's De Finibus Bonorum et fghd
          Malorum for use in a type....
        </p>
        <div>
          <button className="common-btn flex items-center gap-3">
            Read More <MdArrowRightAlt size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
