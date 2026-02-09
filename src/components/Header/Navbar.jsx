import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo 2.svg";
import instagram from "../../assets/svg/instagram.svg";
import { MobileNav } from "./MobileNav";

import { RiMenuFoldFill } from "react-icons/ri";
import PhoneIcon from "../../assets/svg/phone.svg";

const SocialIcons = [
  {
    Icon: instagram,
    Src: "https://www.instagram.com/bijliwala_contracting_canada/",
  },
];

const Nav_Links = [
  {
    linkName: "Home",
    src: "/",
  },
  {
    linkName: "About Us",
    src: "/About",
  },
  {
    linkName: "Our Work",
    src: "/Work",
  },
  // {
  //   linkName: "Blog",
  //   src: "/Blogs",
  // },
  {
    linkName: "Contact Us",
    src: "/Contact ",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-5">
      <div className="flex justify-between items-center max-width ">
        <div
          className="lg:hidden flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RiMenuFoldFill className="text-[2.5rem]" />
        </div>
        <Link
          to="/"
          className="flex gap-5 text-sm font-medium tracking-wide leading-6 max-md:flex-wrap max-md:max-w-full"
        >
          <img
            alt="bijliwala"
            src={Logo}
            className="shrink-0 aspect-auto w-[91px]"
          />
        </Link>
        <ul className="hidden lg:flex gap-10">
          {Nav_Links.map((Links, index) => {
            return (
              <li key={index}>
                <NavLink
                  className="text-[1.4rem] uppercase font-medium hover:text-[#8E7861]"
                  to={Links.src}
                  style={{
                    borderRight:
                      index !== Nav_Links.length - 1
                        ? "2px solid #473C30"
                        : "0px solid #473C30",
                    paddingRight: "3rem",
                  }}
                >
                  {Links.linkName}
                </NavLink>
              </li>
            );
          })}

        </ul>
        <div className="hidden lg:flex gap-2 px-5 my-auto text-xs leading-3 uppercase">
          {SocialIcons.map((Icons) => {
            return (
              <Link
                to={Icons.Src}
                target="_blank"
                className="w-[40px] h-[40px] border border-gray-700 rounded-full flex justify-center  items-center hover:bg-[#8E7861]"
              >
                <div className="w-[12px]">
                  <img
                    src={Icons.Icon}
                    alt={`${Icons}-vector`}
                    className="w-full h-full"
                    logo="bijliwala"
                  />
                </div>
              </Link>
            );
          })}
        </div>
        <Link className="lg:hidden">
          <img src={PhoneIcon} alt="phone-icon svg" className="w-full h-full" />
        </Link>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
