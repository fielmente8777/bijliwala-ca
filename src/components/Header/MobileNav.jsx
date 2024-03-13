import React from "react";
import { NavLink } from "react-router-dom";

const Nav_Links = [
  {
    linkName: "Home",
    src: "/",
  },
  {
    linkName: "About",
    src: "/About",
  },
  {
    linkName: "Work",
    src: "/Work",
  },
  {
    linkName: "Blog",
    src: "/Blogs",
  },
  {
    linkName: "Contact",
    src: "/Contact",
  },
];

export const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className="fixed top-0 right-0 bg-white h-full z-10"
      style={{
        width: open ? "300px" : "0",
        transition: "all 1s",
        // opacity: open ? 1 : 0,
      }}
    >
      <h2
        onClick={() => {
          setOpen(!open);
        }}
        className="text-black text-[2rem] font-semibold text-end px-5 py-2"
      >
        X
      </h2>
      <ul className="flex flex-col gap-10 mt-10 px-8">
        {Nav_Links.map((Links, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink
                className="text-[1.4rem] uppercase font-medium text-black hover:text-[#8E7861]"
                to={Links.src}
              >
                {Links.linkName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
