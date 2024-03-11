import React from "react";
import Logo from "../../assets/logo 2.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-1 max-width bg-[#1E1E1E] gap-5 justify-between text-center text-white whitespace-nowrap border-b-0 border-solid border-white border-opacity-30 max-md:flex-wrap">
        <div className="flex gap-5 text-sm font-medium tracking-wide leading-6 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src={Logo}
            className="shrink-0 aspect-[1.33] w-[91px]"
          />
        </div>
        <div className="flex gap-5 justify-between pr-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>WORK</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </div>
        <div className="flex gap-2 px-5 my-auto text-xs leading-3 uppercase">
          <div className="grow justify-center px-3.5 py-3 rounded-2xl border border-solid border-white border-opacity-10"></div>
          <div className="grow justify-center px-3 py-3.5 rounded-2xl border border-solid border-white border-opacity-10">
            
          </div>
          <div className="grow justify-center p-3 rounded-2xl border border-solid border-white border-opacity-10">
            
          </div>
          <div className="grow justify-center px-3 py-3.5 rounded-2xl border border-solid border-white border-opacity-10">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
